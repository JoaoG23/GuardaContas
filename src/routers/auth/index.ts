import { Request,Response,NextFunction } from 'express';

import jwt from 'jsonwebtoken';

class Auth {

   public comum ( req:Request, res:Response, next:NextFunction ) {
        const token = req.header('authorization-token');
        if(!token) return res.status(401).send({situacao:false , msg:'Você ainda não está logado..'});
        try {
            const verificaUsuarioToken = jwt.verify(token , process.env.TOKEN_SECRET);
            req.usuario = verificaUsuarioToken;
            next();
    
        } catch (error) {
            res.status(401).json(error);
        }
    }

}

