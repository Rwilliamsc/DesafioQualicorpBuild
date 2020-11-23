"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.app = void 0;var _configs = require("./configs");
var _RouterManager = require("./routes/RouterManager");

var app = (0, _configs.CREATE_SERVER)();

// Atribui a session ao app
exports.app = app;app.session = _configs.DATA_BASE.session();

// Configura as rotas de acesso
(0, _RouterManager.ROUTER_MANAGER)(app);
//# sourceMappingURL=app.js.map