import { Request, Response } from 'express'
import knex from '../database/connection'


class TechsController {

    async index(req: Request, res: Response) {
        const trx = await knex.transaction()
        const techs = await trx('techs').select('*')

        const serializedTechs = techs.map(tech => {
            return {
                id: tech.id,
                title: tech.title,
                image_url: `http://localhost:3333/assets/${tech.image}`,
                image_url_mobile : `http://192.168.15.10:3333/assets/${tech.image}`
            }
        })
        await trx.commit()
        return res.json(serializedTechs)

    }
}


export default TechsController