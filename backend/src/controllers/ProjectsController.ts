import knex from '../database/connection'
import { Request, Response } from 'express'

interface Page {
    page: number
}

class ProjectsController{

    async index(req: Request, res: Response) {
        //const trx = await knex.transaction()

        /*try {*/
            
           // const {page = 1} = req.query
           // const parsePage = Number(page)
    
            //const [count]  = await trx('projects').count()

            const data = await knex('projects')
            .join('dev', 'dev.id', '=', 'projects.dev_id')
            //.limit(6)
            //.offset((parsePage-1) * 6)
            .select([
                'projects.*',
                'dev.name',
                'dev.user',
                'dev.bio', 
                'dev.avatar', 
              ])

              const techs = await knex('projects')
               .join('project_techs', 'projects.id', '=', 'project_techs.project_id')
               .select('techs_id')
              

              const serializedData = data.map(data => {
                return {
                    ...data,
                    techs: techs,
                    image_url: `http://localhost:3333/uploads/${data.image}`
                }
            })

             //res.header('X-Total-Count', count['count(*)'])

            // await trx.commit()
            return  res.status(200).send(serializedData)
          /* } /*catch (e) {
            await trx.commit()
            return  res.status(500).send({message: 'Falha ao listar todos o projetos.'});
           }*/
    }

    async filter(req: Request, res: Response) {
        const { city, uf, techs } = req.query;
        const trx = await knex.transaction()

        const parseTechs = String(techs).split(',').map(tech => Number(tech.trim()))

        const projects = await trx('projects')
            /*.join('project_techs', 'projects.id', '=', 'project_techs.project_id')
            .whereIn('project_techs.techs_id', parseTechs)*/
            .where('city', String(city))
            .where('uf', String(uf))
       
        const serializedProjects = projects.map(project => {
                return {
                    ...project,
                    image_url: `http://localhost:3333/uploads/${project.image}`
                }
            })
    
       await trx.commit()
       return res.json(serializedProjects)
    }

    async create(req: Request, res: Response) {
        const trx = await knex.transaction()

        try{

            const {
                description,
                city,
                uf,
                techs,
                link
            } = req.body
                
            const dev_id = req.headers.authorization
    
           /* const dev = await trx('dev').where('id', Number(dev_id)).select('id').first()
    
           if(!dev) {
              return res.status(401).json({error: "Operation not permited"})
            }*/
    
            const projects = {
                image: req.file.filename,
                description,
                city,
                uf,
                link,
                dev_id
            }
            
            const insertedIds  = await trx('projects').insert(projects)
            
            const project_id = insertedIds[0]
    
            const projectTechs = techs
            .split(',')
            .map((tech: string) => Number(tech.trim()))
            .map((techs_id: number) => {
                    return {
                        techs_id,
                        project_id,
                    }
                })
    
            await trx('project_techs').insert(projectTechs)
    
            await trx.commit();
    
            return res.json({
                id: project_id,
                projectTechs,
                ...projects
            })

        } catch(e){
            await trx.commit()
            return  res.status(500).send({message: 'Falha ao criar projetos.'});
        }
       
    }

    async delete(req: Request, res: Response) {
        const {id} = req.params
        const dev_id = req.headers.authorization

        //const trx = await knex.transaction()
    
        const project = await knex('projects').where('id', id).select('dev_id').first()
    
        if(project.dev_id !== dev_id) {
          return res.status(401).json({error: "Operation not permited"})
        }
    
        await knex('projects').where('id', id).delete()

        //await trx.commit();
        
        return res.status(204).send()
      
      }

}


export default ProjectsController
