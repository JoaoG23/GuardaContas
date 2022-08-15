import { Request, Response } from "express";
import ContaModel from "../model/schemas/ContaModel";
import IConta from "../interfaces/IConta";
import MsgValidateDefault from "../services/MsgValidateDefault";
import MgsNoContent from "../services/MsgNoContent";

class ContaController {
  public async listaContas(req: Request, res: Response) {
    try {
      const contas = await ContaModel.findAll();
      return contas.length > 0
        ? res.status(200).json(contas)
        : res.status(200).json([new MgsNoContent(0,'Sem tipo','Nenhum dados','Nenhum dados','Sem instituicao', 'Nem um dados')]);
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
          .json(
            new MsgValidateDefault(false, "Não existe essa conta no banco")
          );
      }
      return res.status(201).json(seExisteConta);
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json(new MsgValidateDefault(false, "Houve algum erro no banco"));
    }
  }

  public async listaPeloTipo(req: Request, res: Response) {
    try {
      const tipoRequest = req.params.tipo;
      const listaContaTipo = await ContaModel.findAll({
        where: { tipo: tipoRequest },
      });
      if (!listaContaTipo || !listaContaTipo.length) {
        return res
          .status(400)
          .json(
            new MsgValidateDefault(
              false,
              "Nenhuma conta desse tipo foi encontrada"
            )
          );
      }

      return res.status(200).json(listaContaTipo);
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json(new MsgValidateDefault(false, "Houve algum erro no banco"));
    }
  }

  public async listaPelaInstituicao(req: Request, res: Response) {
    try {
      const instituicaoRequest = req.params.instituicao;
      const listaInstituicao = await ContaModel.findAll({
        where: { instituicao: instituicaoRequest },
      });

      if (!listaInstituicao || !listaInstituicao.length ) {
        return res
          .status(400)
          .json(
            new MsgValidateDefault(
              false,
              "Nenhuma conta dessa instituicao foi encontrada"
            )
          );
      }

      return res.status(200).json(listaInstituicao);
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json(new MsgValidateDefault(false, "Houve algum erro no banco"));
    }
  }

  public async criar(req: Request, res: Response) {
    try {
      const createTable = await ContaModel.sync();
      const contaCriada = (await ContaModel.create(req.body)) as IConta;

      return res.status(201).json(new MsgValidateDefault(true, 'Inserido com sucesso'));
    } catch (error) {
      console.error(error);
      res.json(new MsgValidateDefault(false, "Houve algum erro no sistema"));
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
          .json(
            new MsgValidateDefault(false, "Não existe essa conta no banco")
          );
      }
      const contaExcluida = await ContaModel.destroy({
        where: { id: idConta },
      });
      return res
        .json(new MsgValidateDefault(true, "Conta excluida com sucesso"));
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json(new MsgValidateDefault(false, "Houve algum erro no sistema"));
    }
  }

  async editar(req: Request, res: Response) {
    try {
      let idConta: string = req.params.id;

      const seExisteConta = await ContaModel.findByPk(idConta);
      if (!seExisteConta) {
        return res
          .status(400)
          .json(
            new MsgValidateDefault(false, "Não existe essa conta no banco")
          );
      }

      const updateConta = await ContaModel.update(req.body as IConta, {
        returning: true,
        where: { id: idConta },
      });

      return res
        .json(new MsgValidateDefault(true, "Conta atualizada com sucesso"));
    } catch (error) {
      console.error(error);

      res
        .status(400)
        .json(new MsgValidateDefault(false, "Houve algum erro no sistema"));
    }
  }
}

export default new ContaController();
