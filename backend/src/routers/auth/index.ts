import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

class Auth {
  public secret: any = process.env.TOKEN_SECRET;

  //    public comum ( req:Request, res:Response, next:NextFunction ) {

  //        try {
  //            const token = req.header('authorization-token');

  //            if(!token) return res.status(401).send({situation:false , msg:'Você ainda não está logado..'});
  //            interface ITokenPayload {
  //                 id?:any;
  //                 iat?:number;
  //                 exp?:number;
  //             }

  //             const verificaUsuarioToken = jwt.verify( token , this.secret );
  //             const { id }  = verificaUsuarioToken as ITokenPayload;
  //             req.usuarioToken = id;

  //             return next

  //         } catch (error) {
  //             res.status(401).json('Voce nao esta logado');
  //         }
  //     }

  comum(req: Request, res: Response, next: NextFunction) {
    const secret: any = process.env.TOKEN_SECRET;

    const token = req.header("authorization-token");
    if (!token)
      return res
        .status(401)
        .send({ situation: false, msg: "Você ainda não está logado.." });
    try {
      const verificaUsuarioToken = jwt.verify(token, secret);

      req.usuarioToken = verificaUsuarioToken;
      next();
    } catch (error) {
      res.status(401).json(error);
    }
  }
}

// export default function( req:Request, res:Response, next:NextFunction ) {

//         const secret:any = process.env.TOKEN_SECRET;

//         const token = req.header('authorization-token');
//         if(!token) return res.status(401).send({situation:false , msg:'Você ainda não está logado..'});
//         try {

//             const verificaUsuarioToken = jwt.verify(token , secret);

//             req.body = verificaUsuarioToken;
//             next();

//         } catch (error) {
//             res.status(401).json(error);
//         }
//     }

export default new Auth();
