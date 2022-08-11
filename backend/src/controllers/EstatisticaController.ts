import { Request,  Response } from "express";
import ContaModel from "../model/schemas/ContaModel";
import IConta from "../interfaces/IConta";
import MgsValidateDefault from "../services/MgsValidateDefault";

class EstatisticaController {

  public async controllerEmConstrucaoTest(req: Request, res: Response) {
    try {
      let tipo = req.params.tipo;

      const listaContaTipo = await ContaModel.findAll({ where: { tipo: tipo } });
        if (listaContaTipo === null) {
          res.status(400).json(new MgsValidateDefault(false, 'Nenhuma conta desse tipo foi encontrada'));
        }

      return res.status(200).json(listaContaTipo);
    } catch (error) {
      console.error(error);
      res.status(400).json(new MgsValidateDefault(false, 'Houve algum erro no banco'));
    }
  }

}

export default new EstatisticaController();
