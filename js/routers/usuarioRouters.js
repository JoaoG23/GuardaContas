"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = __importDefault(require("../controllers/UsuarioController"));
const routers = express_1.Router();
routers.get('/', UsuarioController_1.default.listaTodos);
routers.get('/:id', UsuarioController_1.default.listaUm);
routers.post('/', UsuarioController_1.default.registrar);
routers.post('/logar', UsuarioController_1.default.logar);
routers.put('/:id', UsuarioController_1.default.editar);
routers.delete('/:id', UsuarioController_1.default.remover);
routers.delete('/', UsuarioController_1.default.remover);
exports.default = routers;
