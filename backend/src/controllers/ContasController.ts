import { Request,  Response } from "express";
import ContaModel from "../model/schemas/ContaModel";
import IConta from "../interfaces/IConta";
import MgsValidateDefault from "../services/MgsValidateDefault";

class ContaController {
  public async listaContas(req: Request, res: Response) {
    try {
      const contas = await ContaModel.findAll();
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
      const seExisteConta = await ContaModel.findByPk(idConta);

      if (!seExisteConta) {
        return res
          .status(400)
          .json(new MgsValidateDefault(false, 'Não existe essa conta no banco'));
      }
      return res.status(201).json(seExisteConta);
    } catch (error) {
      console.error(error);
      res.status(400).json(new MgsValidateDefault(false, 'Houve algum erro no banco'));
    }
  }

  public async criar(req: Request, res: Response){
    try {
      const createTable = await ContaModel.sync();
      const contaCriada = await ContaModel.create(req.body) as IConta;
      // const conta = await ContaModel.create({
      //   tipo: req.body.tipo,
      //   login: req.body.login,
      //   senha: req.body.senha,
      //   instituicao: req.body.instituicao,
      //   obs: req.body.obs,
      // });

      return res.status(201).json(contaCriada);
    } catch (error) {
      console.error(error);
      res.json(new MgsValidateDefault(false, 'Houve algum erro no sistema'));
    }
  }

  public async remover(req: Request, res: Response) {
    try {
      let idConta: string = req.params.id;

      if (!idConta) {
        idConta = req.body.id;
      }

      const seExisteConta = await ContaModel.findByPk(idConta);
      if (!seExisteConta) {
        return res
          .status(400)
          .json(new MgsValidateDefault(false, 'Não existe essa conta no banco'));
      }
      const contaExcluida = await ContaModel.destroy({
        where: { id: idConta },
      });
      return res
        .status(201)
        .json(new MgsValidateDefault(true, 'Conta excluida com sucesso'));
    } catch (error) {
      console.error(error);
      res.status(400).json(new MgsValidateDefault(false, 'Houve algum erro no sistema'));
    }
  }

  async editar(req: Request, res: Response) {
    try {
      let idConta: string = req.params.id;

      const seExisteConta = await ContaModel.findByPk(idConta);
      if (!seExisteConta) {
        return res
          .status(400)
          .json(new MgsValidateDefault(false, 'Não existe essa conta no banco'));
      }

      const updateConta = await ContaModel.update(req.body as IConta, {
        returning: true,
        where: { id: idConta },
      });

      return res.status(204).json(new MgsValidateDefault(true, 'Conta atualizada com sucesso'));
    } catch (error) {
      console.error(error);

      res.status(400).
      json(new MgsValidateDefault(false, 'Houve algum erro no sistema'));
    }
  }
}

export default new ContaController();
