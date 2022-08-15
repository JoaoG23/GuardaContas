import { Request, Response } from "express";
import UsuarioModel from "../model/schemas/UsuarioModel";
import MgsValidateDefault from "../services/MsgValidateDefault";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import IUsuario from "../interfaces/IUsuario";
class UsuarioController {
  public async listaTodos(req: Request, res: Response) {
    try {
      const contas = await UsuarioModel.findAll();
      return contas.length > 0
        ? res.status(200).json(contas)
        : res.status(204).send();
    } catch (error) {
      res.send(error);
      console.error(error);
    }
  }

  public async listaUm(req: Request, res: Response) {
    try {
      let idConta: string = req.params.id;
      const seExisteConta = await UsuarioModel.findByPk(idConta);

      if (!seExisteConta) {
        return res
          .status(400)
          .json(
            new MgsValidateDefault(false, "Não existe essa conta no banco")
          );
      }
      return res.status(200).json(seExisteConta);
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json(new MgsValidateDefault(false, "Houve algum erro no banco"));
    }
  }

  public async logar(req: Request, res: Response) {
    try {
      let usuarioInput: string = req.body.usuario;
      let senhaInput: string = req.body.senha;

      const seExisteUsuario: any = await UsuarioModel.findOne({
        where: { usuario: usuarioInput },
      });

      if (!seExisteUsuario) {
        res
          .status(400)
          .json(
            new MgsValidateDefault(false, "Não existe esse usuario no sistema")
          );
        return;
      }

      const senhaEuserMatch = bcrypt.compareSync(
        senhaInput,
        seExisteUsuario.senha
      );

      if (!senhaEuserMatch) {
        res
          .status(400)
          .json(
            new MgsValidateDefault(false, "Senha ou usuário estão incorretos")
          );
        return;
      }

      let secret: string | any = process.env.TOKEN_SECRET;
      const token = jwt.sign(
        { id: seExisteUsuario.id, autorizado: seExisteUsuario.autorizado },
        secret, { expiresIn: '1h' }
      );

      res.header("authorization-token", token);
      res.json({
        situation: true,
        msg: "Logado com sucesso",
        nome: seExisteUsuario.nome,
        token: token,
      });
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json(new MgsValidateDefault(false, "Houve algum erro no banco"));
    }
  }

  public async remover(req: Request, res: Response) {
    try {
      let idUsuario: string = req.params.id;

      if (!idUsuario) {
        idUsuario = req.body.id;
      }

      const seExisteConta = await UsuarioModel.findByPk(idUsuario);
      if (!seExisteConta) {
        return res
          .status(400)
          .json(
            new MgsValidateDefault(false, "Não existe essa conta no banco")
          );
      }
      const contaExcluida = await UsuarioModel.destroy({
        where: { id: idUsuario },
      });
      return res.json(
        new MgsValidateDefault(true, "Conta excluida com sucesso")
      );
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json(new MgsValidateDefault(false, "Houve algum erro no sistema"));
    }
  }

  public async editar(req: Request, res: Response) {
    try {
      let idUsuario: string = req.params.id;

      const seExisteConta = await UsuarioModel.findByPk(idUsuario);
      if (!seExisteConta) {
        return res
          .status(400)
          .json(
            new MgsValidateDefault(false, "Não existe essa conta no banco")
          );
      }

      const updateConta = await UsuarioModel.update(
        {
          nome: req.body.nome,
          usuario: req.body.usuario,
          senha: bcrypt.hashSync(req.body.senha),
          telefone: req.body.telefone,
          autorizado: req.body.autorizado,
          fullAdmin: req.body.fullAdmin,
        } as IUsuario,
        {
          returning: true,
          where: { id: idUsuario },
        }
      );

      return res.json(new MgsValidateDefault(true, "Usuario atualizado com sucesso"));
    } catch (error) {
      console.error(error);

      res
        .status(400)
        .json(new MgsValidateDefault(false, "Houve algum erro no sistema"));
    }
  }

  public async registrar(req: Request, res: Response) {
    try {
      await UsuarioModel.sync();
      const conta = await UsuarioModel.create({
        nome: req.body.nome,
        usuario: req.body.usuario,
        senha: bcrypt.hashSync(req.body.senha),
        telefone: req.body.telefone,
        autorizado: req.body.autorizado,
        fullAdmin: req.body.fullAdmin,
      });

      res.json(conta);
    } catch (error) {
      res.status(400).json(error);
      console.error(error);
    }
  }
}

export default new UsuarioController();
