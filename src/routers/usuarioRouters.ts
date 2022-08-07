import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
const routers = Router();

routers.get('/', UsuarioController.listaTodos );
routers.get('/:id', UsuarioController.listaUm );

routers.post('/', UsuarioController.registrar );

routers.put('/', UsuarioController.editar );

routers.delete('/', UsuarioController.remover );


export default routers;