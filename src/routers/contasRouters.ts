import { Router } from "express";
import ContaController from "../controllers/ContasController";

const routers = Router();

routers.get('/', ContaController.listaContas );
routers.get('/:id', ContaController.listaUm );

routers.post('/', ContaController.criar );

routers.put('/:id', ContaController.editar );

routers.delete('/:id', ContaController.remover );

routers.delete('/', ContaController.remover );

export default routers;