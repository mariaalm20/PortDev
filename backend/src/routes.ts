import express from 'express'

import ProjectsController from './controllers/ProjectsController'
import DevController from './controllers/DevController'
import TechsController from './controllers/TechsController'
import SessionController from './controllers/SessionController'

import multer from 'multer'
import multerConfig from './config/multer'
import { celebrate, Joi } from 'celebrate'
const routes = express.Router()
const upload = multer(multerConfig)


const projectsController = new ProjectsController()
const devController = new DevController()
const techsController = new TechsController()
const sessionController = new SessionController()

routes.post('/dev', celebrate({
  body: Joi.object().keys({
      user: Joi.string().required(),
  })
}, {
  abortEarly: false
}), devController.create)
routes.get('/dev', devController.index)
routes.get('/dev/:id', devController.show)

routes.get('/techs', techsController.index)

routes.post('/projects', upload.single('image'), projectsController.create)

routes.get('/projects', projectsController.index)
routes.delete('/projects/:id', projectsController.delete)

routes.get('/projects/filter', projectsController.filter)

routes.get('/login/github', sessionController.session)
routes.get('/login/github/callback', sessionController.callback)
routes.get('/admin', sessionController.admin)
routes.get('/logout', sessionController.logout)

export default routes

