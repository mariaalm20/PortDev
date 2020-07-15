import { Request, Response } from 'express'
import knex from '../database/connection'
import fetch from 'node-fetch'
import axios from 'axios'
import generateUnique from '../utils/generateUnique'


interface Dev {
  id: string;
  name: string;
  user: string;
  bio: string;
  avatar: string
}


const client_id = "Iv1.3748fc5e9ac456a0"
const client_secret = "f3829f5465a1d6239f1b22d59afc92ae475bae3d"

console.log({client_id, client_secret})


async function getAccessToken(code: string) {
  const request = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code
    })
  });
  const text = await request.text();
  console.log(text)
  const params = new URLSearchParams(text);
  return params.get("access_token");
}

async function getGitHubUser(acess_token: string) {
  const request = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `bearer ${acess_token}`
    }
  });
  const data = await request.json()
  return data
}

class SessionController {
   async session(req: Request, res: Response) {
     const redirect_uri = "http://localhost:3333/login/github/callback";
     const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`
     res.redirect(url)
    }

    async callback(req: Request, res: Response) {
      const code = req.query.code
      const parseCode = String(code)
      const token = await getAccessToken(parseCode)
      const parseToken = String(token)
      const user =  await getGitHubUser(parseToken)

     if (user) {
        req!.session!.parseToken = parseToken;
        req!.session!.githubId = user.id;
        req!.session!.user = user.login;
        req!.session!.avatar_url = user.avatar_url;
        req!.session!.name = user.name;
        req!.session!.bio = user.bio;

        res.redirect("/admin");

      } else {
        console.log('Error')
        res.send("Login did not succeed!");
      }

      //return res.json({githubData})
    }

    async admin (req: Request, res:Response) {
      if(req.session) {
        //res.send('Hello <pre>'+ JSON.stringify(req.session, null, 2))

        const userExists = await knex('dev').where('user', req.session.user).select('*').first()
        
        if (userExists) {
            return res.json(userExists)
        } 

        const id = generateUnique()

        await knex<Dev>('dev').insert({
          id: id,
          name: req.session.name,
          user: req.session.user,
          bio: req.session.bio,
          avatar: req.session.avatar_url
       })

       return res.json({
        id,
      })
      } else {
        res.redirect("/login/github");
      }
    }

    async logout(req: Request, res: Response) {
      if (req.session) req!.session! == null
      res.redirect("/");
    }

}


export default SessionController