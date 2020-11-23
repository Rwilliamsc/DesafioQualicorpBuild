import express from 'express'
import cors from 'cors'

export const CREATE_SERVER = () => {
  const app = express()

  // Desativa o X-Powered-By: Express
  app.disable('x-powered-by')

  // Parse JSON
  app.use(express.json())

  // Configuração de arquivos estaticos
  app.use('/', express.static('public/'))

  // Permite acesso externo
  app.use(cors())

  // Atribuição da porta onde será eposta a API
  app.set('port', process.env.PORT || '4000')

  return app
}
