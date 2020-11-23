/* eslint-disable new-cap */
import HttpStatus from 'http-status'

class Controller {
  constructor (app) {
    this.classe = ''
    this.modelo = {}
    this.includesConsulta = []
    this.session = app.session
  }

  async getAll (req, res) {
    try {
      const resultados = []
      const { records } = await this.session.run(`MATCH (n:${this.classe}) RETURN n`)

      records.forEach(record => {
        const modelo = new this.modelo()
        modelo.json = { ...record._fields[0].properties, id: record._fields[0].identity.low }
        resultados.push(modelo.json)
      })

      return res.status(HttpStatus.OK).json(resultados)
    } catch (error) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: true, message: error.message })
    }
  }

  async findOne (req, res) {
    try {
      let resultado = {}
      const id = req.params.id
      const query = `
        MATCH (n:${this.classe})
        WHERE ID(n) = ${id}
        RETURN n
      `
      const { records } = await this.session.run(query)
      records.forEach(record => {
        const modelo = new this.modelo()
        modelo.json = { ...record._fields[0].properties, id: record._fields[0].identity.low }
        resultado = modelo.json
      })

      return res.status(HttpStatus.OK).json(resultado)
    } catch (error) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: true, message: error.message })
    }
  }

  async create (req, res) {
    try {
      const dados = new this.modelo()
      dados.json = req.body

      const queryBaseCreate = `
        CREATE (n:${this.classe} $propeties)
      `

      await this.session.run(this.queryCreate() || queryBaseCreate, { propeties: dados.json })

      return res.status(HttpStatus.CREATED).send()
    } catch (error) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: true, message: error.message })
    }
  }

  async update (req, res) {
    try {
      const id = req.params.id
      const dados = new this.modelo()
      dados.json = req.body

      const queryBaseUpdate = `
        MATCH (n:${this.classe})
        WHERE ID(n) = ${id}
        SET n += $propeties
      `
      await this.session.run(this.queryUpdate() || queryBaseUpdate, { propeties: dados.json })

      return res.status(HttpStatus.OK).send()
    } catch (error) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: true, message: error.message })
    }
  }

  async delete (req, res) {
    try {
      const id = req.params.id

      const queryBaseDelete = `
        MATCH (n:${this.classe})
        WHERE ID(n) = ${id}
        DETACH DELETE n
      `
      await this.session.run(this.queryDelete() || queryBaseDelete)

      return res.status(HttpStatus.NO_CONTENT).send()
    } catch (error) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ error: true, message: error.message })
    }
  }

  // Método reutilizáveis

  queryCreate () {
    return null
  }

  queryUpdate () {
    return null
  }

  queryDelete () {
    return null
  }
}

export { Controller }
