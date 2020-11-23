"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.Controller = void 0;
var _httpStatus = _interopRequireDefault(require("http-status"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

Controller = /*#__PURE__*/function () {
  function Controller(app) {_classCallCheck(this, Controller);
    this.classe = '';
    this.modelo = {};
    this.includesConsulta = [];
    this.session = app.session;
  }_createClass(Controller, [{ key: "getAll", value: function () {var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(

      req, res) {var _this = this;var resultados, _yield$this$session$r, records;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;

                resultados = [];_context.next = 4;return (
                  this.session.run("MATCH (n:".concat(this.classe, ") RETURN n")));case 4:_yield$this$session$r = _context.sent;records = _yield$this$session$r.records;

                records.forEach(function (record) {
                  var modelo = new _this.modelo();
                  modelo.json = _objectSpread(_objectSpread({}, record._fields[0].properties), {}, { id: record._fields[0].identity.low });
                  resultados.push(modelo.json);
                });return _context.abrupt("return",

                res.status(_httpStatus["default"].OK).json(resultados));case 10:_context.prev = 10;_context.t0 = _context["catch"](0);return _context.abrupt("return",

                res.status(_httpStatus["default"].UNPROCESSABLE_ENTITY).json({ error: true, message: _context.t0.message }));case 13:case "end":return _context.stop();}}}, _callee, this, [[0, 10]]);}));function getAll(_x, _x2) {return _getAll.apply(this, arguments);}return getAll;}() }, { key: "findOne", value: function () {var _findOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(



      req, res) {var _this2 = this;var resultado, id, query, _yield$this$session$r2, records;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;

                resultado = {};
                id = req.params.id;
                query = "\n        MATCH (n:".concat(
                this.classe, ")\n        WHERE ID(n) = ").concat(
                id, "\n        RETURN n\n      ");_context2.next = 6;return (


                  this.session.run(query));case 6:_yield$this$session$r2 = _context2.sent;records = _yield$this$session$r2.records;
                records.forEach(function (record) {
                  var modelo = new _this2.modelo();
                  modelo.json = _objectSpread(_objectSpread({}, record._fields[0].properties), {}, { id: record._fields[0].identity.low });
                  resultado = modelo.json;
                });return _context2.abrupt("return",

                res.status(_httpStatus["default"].OK).json(resultado));case 12:_context2.prev = 12;_context2.t0 = _context2["catch"](0);return _context2.abrupt("return",

                res.status(_httpStatus["default"].UNPROCESSABLE_ENTITY).json({ error: true, message: _context2.t0.message }));case 15:case "end":return _context2.stop();}}}, _callee2, this, [[0, 12]]);}));function findOne(_x3, _x4) {return _findOne.apply(this, arguments);}return findOne;}() }, { key: "create", value: function () {var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(



      req, res) {var dados, queryBaseCreate;return regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.prev = 0;

                dados = new this.modelo();
                dados.json = req.body;

                queryBaseCreate = "\n        CREATE (n:".concat(
                this.classe, " $propeties)\n      ");_context3.next = 6;return (


                  this.session.run(this.queryCreate() || queryBaseCreate, { propeties: dados.json }));case 6:return _context3.abrupt("return",

                res.status(_httpStatus["default"].CREATED).send());case 9:_context3.prev = 9;_context3.t0 = _context3["catch"](0);return _context3.abrupt("return",

                res.status(_httpStatus["default"].UNPROCESSABLE_ENTITY).json({ error: true, message: _context3.t0.message }));case 12:case "end":return _context3.stop();}}}, _callee3, this, [[0, 9]]);}));function create(_x5, _x6) {return _create.apply(this, arguments);}return create;}() }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(



      req, res) {var id, dados, queryBaseUpdate;return regeneratorRuntime.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.prev = 0;

                id = req.params.id;
                dados = new this.modelo();
                dados.json = req.body;

                queryBaseUpdate = "\n        MATCH (n:".concat(
                this.classe, ")\n        WHERE ID(n) = ").concat(
                id, "\n        SET n += $propeties\n      ");_context4.next = 7;return (


                  this.session.run(this.queryUpdate() || queryBaseUpdate, { propeties: dados.json }));case 7:return _context4.abrupt("return",

                res.status(_httpStatus["default"].OK).send());case 10:_context4.prev = 10;_context4.t0 = _context4["catch"](0);return _context4.abrupt("return",

                res.status(_httpStatus["default"].UNPROCESSABLE_ENTITY).json({ error: true, message: _context4.t0.message }));case 13:case "end":return _context4.stop();}}}, _callee4, this, [[0, 10]]);}));function update(_x7, _x8) {return _update.apply(this, arguments);}return update;}() }, { key: "delete", value: function () {var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(



      req, res) {var id, queryBaseDelete;return regeneratorRuntime.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.prev = 0;

                id = req.params.id;

                queryBaseDelete = "\n        MATCH (n:".concat(
                this.classe, ")\n        WHERE ID(n) = ").concat(
                id, "\n        DETACH DELETE n\n      ");_context5.next = 5;return (


                  this.session.run(this.queryDelete() || queryBaseDelete));case 5:return _context5.abrupt("return",

                res.status(_httpStatus["default"].NO_CONTENT).send());case 8:_context5.prev = 8;_context5.t0 = _context5["catch"](0);return _context5.abrupt("return",

                res.status(_httpStatus["default"].UNPROCESSABLE_ENTITY).json({ error: true, message: _context5.t0.message }));case 11:case "end":return _context5.stop();}}}, _callee5, this, [[0, 8]]);}));function _delete(_x9, _x10) {return _delete2.apply(this, arguments);}return _delete;}()



    // Método reutilizáveis
  }, { key: "queryCreate", value: function queryCreate()
    {
      return null;
    } }, { key: "queryUpdate", value: function queryUpdate()

    {
      return null;
    } }, { key: "queryDelete", value: function queryDelete()

    {
      return null;
    } }]);return Controller;}();exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map