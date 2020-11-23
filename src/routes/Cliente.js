import { ClienteController } from '../controllers/ClienteController'
import { ROTAS } from './Rotas'

export default app => {
  const controller = new ClienteController(app)
  ROTAS(app, 'cliente', controller)
}
