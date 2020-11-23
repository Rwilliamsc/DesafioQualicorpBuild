"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.DATA_BASE = void 0;
var _neo4jDriver = _interopRequireDefault(require("neo4j-driver"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

var DATA_BASE = _neo4jDriver["default"].driver('bolt://204.236.241.53:32903', _neo4jDriver["default"].auth.basic('neo4j', 'dividers-radiators-emitters'));exports.DATA_BASE = DATA_BASE;