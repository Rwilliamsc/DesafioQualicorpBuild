"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.Cliente = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var Cliente = /*#__PURE__*/function () {
  function Cliente() {_classCallCheck(this, Cliente);
    this.id = null;
    this.cpf = '';
    this.nome = '';
    this.email = null;
    this.telefone = null;
    this.dataNascimento = null;
  }_createClass(Cliente, [{ key: "json", set: function set(

    cliente) {
      this.id = cliente.id || null;
      this.cpf = cliente.cpf;
      this.nome = cliente.nome;
      this.email = cliente.email || null;
      this.telefone = cliente.telefone || null;
      this.dataNascimento = cliente.dataNascimento || null;
    }, get: function get()

    {
      return this;
    } }]);return Cliente;}();exports.Cliente = Cliente;