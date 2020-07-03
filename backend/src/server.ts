import express from 'express'
import routes from './routes'
import path from 'path'
import cors from 'cors'
import { errors } from 'celebrate';
import cookieSession from 'cookie-session'


const cookie_secret = "bongocat"

const app = express()

app.use(cors())

app.use(
  cookieSession({
    secret: cookie_secret
  })
)
app.use(express.json()) 



app.use(routes)

app.use('/assets', express.static(path.resolve(__dirname, '.', 'assets')))
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

app.listen(3333, () => {
  console.log("🚀 Server started");
})
