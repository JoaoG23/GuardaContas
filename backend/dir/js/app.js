"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const routerController_1 = __importDefault(require("./routers/routerController"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.middleware();
        this.routers();
    }
    middleware() {
        this.express.use(express_1.default.json());
        this.express.use((0, cors_1.default)());
    }
    database() {
    }
    routers() {
        this.express.use(routerController_1.default);
    }
}
exports.default = new App().express;
