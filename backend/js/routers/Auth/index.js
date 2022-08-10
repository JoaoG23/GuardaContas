"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Auth {
    constructor() {
        this.secret = process.env.TOKEN_SECRET;
    }
    comum(req, res, next) {
        try {
            const token = req.header('authorization-token');
            if (!token)
                return res.status(401).send({ situation: false, msg: 'Você ainda não está logado..' });
            const verificaUsuarioToken = jsonwebtoken_1.default.verify(token, this.secret);
            const { id } = verificaUsuarioToken;
            req.usuarioToken = id;
            return next;
        }
        catch (error) {
            res.status(401).json('Voce nao esta logado');
        }
    }
}
exports.default = new Auth();
