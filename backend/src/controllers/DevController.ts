
import { Request, Response } from 'express'
import knex from '../database/connection'
import axios from 'axios'
import generateUnique from '../utils/generateUnique'

interface Dev {
  id: string;
  name: string;
  user: string;
  bio: string;
  avatar: string
}

class DevController {

    async index (req: Request, res: Response){
           const data = await knex('dev').select('*');

           return  res.status(200).send(data);

    }

    async show  (req: Request, res: Response){
        const {id} = req.params
        //const trx = await knex.transaction()

       const dev = await knex('dev')
         .where('id', id)
         .select('*')
         .first()

        if(!dev){
          return res.status(400).json({error: "Dev com id citado não encontrado"})
        }
        //await trx.commit();
       return res.json(dev)
    }

    async create(req: Request, res: Response) {
     // const trx = await knex.transaction()

     /* try{*/
        const { user } = req.body

       const userExists = await knex('dev').where('user', user).select('*').first()
        
        if (userExists) {
            return res.json(userExists)
        } 
        
        const response = await axios.get(`https://api.github.com/users/${user}`)
        
        const { name, bio, avatar_url: avatar } = response.data

        const id = generateUnique()

       await knex<Dev>('dev').insert({
        id,
        name: name,
        user: user,
        bio: bio,
        avatar: avatar
     })
     
     //await trx.commit()
     return res.json({
       id,
     })

      }/* catch(e){
        await trx.commit()
        return  res.status(500).send({message: 'Falha ao criar dev.'})
      }*/
      
  //  }
}

export default DevController



