import { CREATE_SERVER, DATA_BASE } from './configs'
import { ROUTER_MANAGER } from './routes/RouterManager'

const app = CREATE_SERVER()

// Atribui a session ao app
app.session = DATA_BASE.session()

// Configura as rotas de acesso
ROUTER_MANAGER(app)

export { app }
