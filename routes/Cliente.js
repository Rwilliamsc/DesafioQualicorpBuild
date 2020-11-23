"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _ClienteController = require("../controllers/ClienteController");
var _Rotas = require("./Rotas");var _default =

function _default(app) {
  var controller = new _ClienteController.ClienteController(app);
  (0, _Rotas.ROTAS)(app, 'cliente', controller);
};exports["default"] = _default;