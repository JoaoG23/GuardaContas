"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ContaController_1 = __importDefault(require("../controllers/ContaController"));
const routers = (0, express_1.Router)();
routers.get('/', ContaController_1.default.listaContas);
routers.get('/:id', ContaController_1.default.listaUm);
routers.post('/', ContaController_1.default.criar);
routers.put('/:id', ContaController_1.default.update);
routers.delete('/:id', ContaController_1.default.destroy);
routers.delete('/', ContaController_1.default.destroy);
exports.default = routers;
