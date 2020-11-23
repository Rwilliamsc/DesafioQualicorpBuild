import fs from 'fs'
import path from 'path'

const ROUTER_MANAGER = async app => {
  /** importa e carrega as rotas */
  const files = await fs.readdirSync(path.join(__dirname, './'))

  for (const fileName of files) {
    if (fileName === 'RouterManager.js' || fileName === 'Rotas.js') continue

    try {
      const file = await import(path.join(__dirname, fileName))
      file.default(app)
    } catch (error) {
      console.log(error.message)
    }
  }
}

export { ROUTER_MANAGER }
