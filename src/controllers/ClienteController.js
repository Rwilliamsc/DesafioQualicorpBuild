import { Cliente } from '../models/Cliente'
import { Controller } from './Controller'

class ClienteController extends Controller {
  constructor (app) {
    super(app)
    this.classe = 'Cliente'
    this.modelo = Cliente
  }
}

export { ClienteController }
