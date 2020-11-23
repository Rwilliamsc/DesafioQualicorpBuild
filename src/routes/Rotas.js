
const ROTAS = (app, rota, controller) => {
  app.route(`/${rota}`)
    .get((req, res) => {
      controller.getAll(req, res)
    })
    .post((req, res) => {
      controller.create(req, res)
    })

  app.route(`/${rota}/:id`)
    .get((req, res) => {
      controller.findOne(req, res)
    })
    .put((req, res) => {
      controller.update(req, res)
    })
    .delete((req, res) => {
      controller.delete(req, res)
    })
}

export { ROTAS }
