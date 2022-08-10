"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const contasRouters_1 = __importDefault(require("./routers/contasRouters"));
const usuarioRouters_1 = __importDefault(require("./routers/usuarioRouters"));
const Auth_1 = __importDefault(require("./routers/Auth"));
class App {
    constructor() {
        this.express = express_1.default();
        this.middleware();
        this.routers();
        this.auth = Auth_1.default;
    }
    middleware() {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
    }
    routers() {
        this.express.use('/contas', contasRouters_1.default);
        this.express.use('/usuarios', usuarioRouters_1.default);
    }
}
exports.default = new App().express;
