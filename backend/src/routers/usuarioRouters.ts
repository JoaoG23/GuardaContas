import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
const routers = Router();

routers.get('/', UsuarioController.listaTodos );
routers.get('/:id', UsuarioController.listaUm );

routers.post('/', UsuarioController.registrar );
routers.post('/logar', UsuarioController.logar );

routers.put('/:id', UsuarioController.editar );

routers.delete('/:id', UsuarioController.remover );
routers.delete('/', UsuarioController.remover );


export default routers;