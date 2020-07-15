import express from 'express'
import routes from './routes'
import path from 'path'
import cors from 'cors'
import { errors } from 'celebrate';
import cookieSession from 'cookie-session'

https://seginfo.com.br/2010/08/20/gerando-certificados-digitais-auto-assinados-com-openssl-2/
const cookie_secret = "bongocat"

const app = express()

app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET, POST, HEAD, DELETE, PUT",
  credentials: true
}))

app.use(express.json()) 

app.use(
  cookieSession({
    secret: cookie_secret
  })
)



app.use(routes)

app.use('/assets', express.static(path.resolve(__dirname, '.', 'assets')))
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

app.listen(3333, () => {
  console.log("🚀 Server started");
})
