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
const ContaModel_1 = __importDefault(require("../model/schemas/ContaModel"));
class ContaController {
    listaContas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contas = yield ContaModel_1.default.findAll();
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
                const seExisteConta = yield ContaModel_1.default.findByPk(idConta);
                if (!seExisteConta) {
                    return res
                        .status(400)
                        .json({ situation: false, msg: "Não existe essa conta no banco" });
                }
                return res.status(201).json(seExisteConta);
            }
            catch (error) {
                console.error(error);
                res.json("Erro de qualquer coisa");
            }
        });
    }
    criar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dado = req.body;
                const createTable = yield ContaModel_1.default.sync();
                const conta = yield ContaModel_1.default.create(dado);
                return res.status(201).json(conta);
            }
            catch (error) {
                console.error(error);
                res.json("Erro de qualquer coisa");
            }
        });
    }
    destroy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let idConta = req.params.id;
                if (!idConta) {
                    idConta = req.body.id;
                }
                const seExisteConta = yield ContaModel_1.default.findByPk(idConta);
                if (!seExisteConta) {
                    return res
                        .status(400)
                        .json({ situation: false, msg: "Não existe essa conta no banco" });
                }
                const contaExcluida = yield ContaModel_1.default.destroy({
                    where: { id: idConta },
                });
                return res
                    .status(201)
                    .json({ situation: true, msg: "Excluido com sucesso" });
            }
            catch (error) {
                console.error(error);
                res.json("Erro de qualquer coisa");
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let idConta = req.params.id;
                const seExisteConta = yield ContaModel_1.default.findByPk(idConta);
                if (!seExisteConta) {
                    return res
                        .status(400)
                        .json({ situation: false, msg: "Não existe essa conta no banco" });
                }
                const updateConta = yield ContaModel_1.default.update(req.body, {
                    returning: true,
                    where: { id: idConta },
                });
                return res.status(204).json(updateConta);
            }
            catch (error) {
                console.error(error);
                res.json("Erro de qualquer coisa");
            }
        });
    }
}
exports.default = new ContaController();
