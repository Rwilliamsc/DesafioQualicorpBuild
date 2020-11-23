"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.CREATE_SERVER = void 0;var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _path = _interopRequireDefault(require("path"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

var CREATE_SERVER = function CREATE_SERVER() {
  var app = (0, _express["default"])();

  // Desativa o X-Powered-By: Express
  app.disable('x-powered-by');

  // Parse JSON
  app.use(_express["default"].json());

  // Configuração de arquivos estaticos
  app.use('/', _express["default"]["static"](_path["default"].join(__dirname, '../public')));

  // Permite acesso externo
  app.use((0, _cors["default"])());

  // Atribuição da porta onde será eposta a API
  app.set('port', process.env.PORT || '4000');

  return app;
};exports.CREATE_SERVER = CREATE_SERVER;
//# sourceMappingURL=CreateServer.js.map