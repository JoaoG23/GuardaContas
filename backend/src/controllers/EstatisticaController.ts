import { Request,  Response } from "express";
import ContaModel from "../model/schemas/ContaModel";
import IConta from "../interfaces/IConta";
import MgsValidateDefault from "../services/MsgValidateDefault";

class EstatisticaController {

  public async contarQuantasContasRegistrada(req: Request, res: Response) {
    try {

      const listaContaTipo = await ContaModel.count()
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
