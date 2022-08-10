"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioModel_1 = __importDefault(require("../model/schemas/UsuarioModel"));
const MgsValidateDefault_1 = __importDefault(require("../services/MgsValidateDefault"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UsuarioController {
    listaTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contas = yield UsuarioModel_1.default.findAll();
                return contas.length > 0
                    ? res.status(200).json(contas)
                    : res.status(204).send();
            }
            catch (error) {
                res.send(error);
                console.error(error);
            }
        });
    }
    listaUm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let idConta = req.params.id;
                const seExisteConta = yield UsuarioModel_1.default.findByPk(idConta);
                if (!seExisteConta) {
                    return res
                        .status(400)
                        .json(new MgsValidateDefault_1.default(false, "Não existe essa conta no banco"));
                }
                return res.status(200).json(seExisteConta);
            }
            catch (error) {
                console.error(error);
                res
                    .status(400)
                    .json(new MgsValidateDefault_1.default(false, "Houve algum erro no banco"));
            }
        });
    }
    logar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let usuarioInput = req.body.usuario;
                let senhaInput = req.body.senha;
                const seExisteUsuario = yield UsuarioModel_1.default.findOne({
                    where: { usuario: usuarioInput },
                });
                if (!seExisteUsuario) {
                    res
                        .status(400)
                        .json(new MgsValidateDefault_1.default(false, "Não existe esse usuario no sistema"));
                    return;
                }
                const senhaEuserMatch = bcryptjs_1.default.compareSync(senhaInput, seExisteUsuario.senha);
                if (!senhaEuserMatch) {
                    res
                        .status(400)
                        .json(new MgsValidateDefault_1.default(false, "Senha ou usuário estão incorretos"));
                    return;
                }
                let secret = process.env.TOKEN_SECRET;
                const token = jsonwebtoken_1.default.sign({ id: seExisteUsuario.id, autorizado: seExisteUsuario.autorizado }, secret, { expiresIn: 1000 });
                res.header("authorization-token", token);
                res.json({
                    situation: true,
                    msg: "Logado com sucesso",
                    nome: seExisteUsuario.nome,
                    token: token,
                });
            }
            catch (error) {
                console.error(error);
                res
                    .status(400)
                    .json(new MgsValidateDefault_1.default(false, "Houve algum erro no banco"));
            }
        });
    }
    remover(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let idUsuario = req.params.id;
                if (!idUsuario) {
                    idUsuario = req.body.id;
                }
                const seExisteConta = yield UsuarioModel_1.default.findByPk(idUsuario);
                if (!seExisteConta) {
                    return res
                        .status(400)
                        .json(new MgsValidateDefault_1.default(false, "Não existe essa conta no banco"));
                }
                const contaExcluida = yield UsuarioModel_1.default.destroy({
                    where: { id: idUsuario },
                });
                return res.json(new MgsValidateDefault_1.default(true, "Conta excluida com sucesso"));
            }
            catch (error) {
                console.error(error);
                res
                    .status(400)
                    .json(new MgsValidateDefault_1.default(false, "Houve algum erro no sistema"));
            }
        });
    }
    editar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let idUsuario = req.params.id;
                const seExisteConta = yield UsuarioModel_1.default.findByPk(idUsuario);
                if (!seExisteConta) {
                    return res
                        .status(400)
                        .json(new MgsValidateDefault_1.default(false, "Não existe essa conta no banco"));
                }
                const updateConta = yield UsuarioModel_1.default.update({
                    nome: req.body.nome,
                    usuario: req.body.usuario,
                    senha: bcryptjs_1.default.hashSync(req.body.senha),
                    telefone: req.body.telefone,
                    autorizado: req.body.autorizado,
                    fullAdmin: req.body.fullAdmin,
                }, {
                    returning: true,
                    where: { id: idUsuario },
                });
                return res.json(new MgsValidateDefault_1.default(true, "Usuario atualizado com sucesso"));
            }
            catch (error) {
                console.error(error);
                res
                    .status(400)
                    .json(new MgsValidateDefault_1.default(false, "Houve algum erro no sistema"));
            }
        });
    }
    registrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UsuarioModel_1.default.sync();
                const conta = yield UsuarioModel_1.default.create({
                    nome: req.body.nome,
                    usuario: req.body.usuario,
                    senha: bcryptjs_1.default.hashSync(req.body.senha),
                    telefone: req.body.telefone,
                    autorizado: req.body.autorizado,
                    fullAdmin: req.body.fullAdmin,
                });
                res.json(conta);
            }
            catch (error) {
                res.status(400).json(error);
                console.error(error);
            }
        });
    }
}
exports.default = new UsuarioController();
