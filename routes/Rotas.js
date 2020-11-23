"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.ROTAS = void 0;
var ROTAS = function ROTAS(app, rota, controller) {
  app.route("/".concat(rota)).
  get(function (req, res) {
    controller.getAll(req, res);
  }).
  post(function (req, res) {
    controller.create(req, res);
  });

  app.route("/".concat(rota, "/:id")).
  get(function (req, res) {
    controller.findOne(req, res);
  }).
  put(function (req, res) {
    controller.update(req, res);
  })["delete"](
  function (req, res) {
    controller["delete"](req, res);
  });
};exports.ROTAS = ROTAS;