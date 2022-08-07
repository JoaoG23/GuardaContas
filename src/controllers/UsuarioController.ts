import { Request,  Response } from "express";
import UsuarioModel from "../model/schemas/UsuarioModel";
import IUsuario from '../interfaces/IUsuario';
import ServiceSms from "../services/ServiceSms";
import MgsValidateDefault from "../services/MgsValidateDefault";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

class UsuarioController {


    public async listaTodos( req:Request , res:Response ) {
        
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
              .json(new MgsValidateDefault(false, 'Não existe essa conta no banco'));
          }
          return res.status(200).json(seExisteConta);
        } catch (error) {
          console.error(error);
          res.status(400).json(new MgsValidateDefault(false, 'Houve algum erro no banco'));
        }
      }



    public async logar(req: Request, res: Response) {
        try {
          let nomeUsuario: string = req.params.usuario;
          const seExisteConta = await UsuarioModel.findOne({ where: { usuario:nomeUsuario  } }); 

          if (!seExisteConta) {
            return res
              .status(400)
              .json(new MgsValidateDefault(false, 'Não existe esse usuario no banco'));
          }


          // const usuarioEncontrado = verificarExistenciaUsuario[0];

          // if (!usuarioEncontrado) {
          //   resp.status(400).json({situation:false, msg:"Senha ou Usuario incorretos"});
          //   return;
          // }
    
          // const senhaEuserMatch = bcrypt.compareSync(
          //   senhaUsuario,
          //   usuarioEncontrado.senha_login
          // );
    
          // if (!senhaEuserMatch) {
          //   resp.status(400).json({situation:false, msg:"Senha ou Usuario incorretos"});
          //   return;
          // }
    
          return res.status(200).json(seExisteConta);
        } catch (error) {
          console.error(error);
          res.status(400).json(new MgsValidateDefault(false, 'Houve algum erro no banco'));
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
              .json(new MgsValidateDefault(false, 'Não existe essa conta no banco'));
          }
          const contaExcluida = await UsuarioModel.destroy({
            where: { id: idUsuario },
          });
          return res
            .status(201)
            .json(new MgsValidateDefault(true, 'Conta excluida com sucesso'));
        } catch (error) {
          console.error(error);
          res.status(400).json(new MgsValidateDefault(false, 'Houve algum erro no sistema'));
        }
      }


    public async editar( req:Request , res:Response ) {
        
     try {
        let idUsuario: string = req.params.id;

        const seExisteConta = await UsuarioModel.findByPk(idUsuario);
        if (!seExisteConta) {
          return res
            .status(400)
            .json(new MgsValidateDefault(false, 'Não existe essa conta no banco'));
        }
  
        const updateConta = await UsuarioModel.update(req.body, {
          returning: true,
          where: { id: idUsuario },
        });
  
        return res.status(204).json(updateConta);
      } catch (error) {
        console.error(error);
  
        res.status(400).
        json(new MgsValidateDefault(false, 'Houve algum erro no sistema'));
      }

    }


    public async registrar( req:Request , res:Response ) {
    
        try {
            const dadosUsuario:IUsuario = req.body;

            const createTable = await UsuarioModel.sync();
            const conta = await UsuarioModel.create({dadosUsuario});
            await UsuarioModel.sync();
             await UsuarioModel.create({dadosUsuario});
            res.json(new MgsValidateDefault(true,'Usuário criado com sucesso!'));
            res.json(dadosUsuario);
        } catch (error) {
            res.status(400).json(error)
            console.error(error);
        }

    }
}


export default new UsuarioController();