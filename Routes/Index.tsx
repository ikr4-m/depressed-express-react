import { Express } from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Index from '@app/View/Index'

export default (app: Express) => {
  app.get('/', (req, res, next) => {
    res.send('Mantap')
  })

  // Express bertemu dengan react
  app.get('/react', (req, res, next) => {
    res.send(ReactDOMServer.renderToString(<Index anjay="mabar" />))
  })
}
