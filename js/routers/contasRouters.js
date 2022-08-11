"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ContasController_1 = __importDefault(require("../controllers/ContasController"));
const routers = express_1.Router();
routers.get('/', ContasController_1.default.listaContas);
routers.get('/:id', ContasController_1.default.listaUm);
routers.post('/', ContasController_1.default.criar);
routers.put('/:id', ContasController_1.default.editar);
routers.delete('/:id', ContasController_1.default.remover);
routers.delete('/', ContasController_1.default.remover);
exports.default = routers;
