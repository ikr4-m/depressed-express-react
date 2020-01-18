import 'dotenv/config'

import Express from 'express'
import BodyParser from 'body-parser'
import CookieParser from 'cookie-parser'
import Chalk from 'chalk'
import FileSystem from 'fs'
import ServeIndex from 'serve-index'
import Console from '@script/Console'

const app = Express()
app.use(BodyParser.urlencoded( { extended: true } ))
app.use(BodyParser.json())
app.use(CookieParser())
app.use('/public', Express.static('./App/Public'), ServeIndex('./App/Public', { icons: true }))
app.use((...args) => Console(...args))

// Looping Router
const fs = FileSystem.readdirSync('./Routes')
fs.forEach(async route => {
  import(`./Routes/${route}`).then(i => {
    i.default(app)
  })
})

app.listen(process.env.PORT, () => {
  console.log(
    Chalk.greenBright(`Server berhasil diluncurkan pada http://127.0.0.1:${process.env.PORT}`)
  )
})
