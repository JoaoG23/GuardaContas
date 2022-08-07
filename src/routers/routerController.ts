import { Router } from "express";
import ContaController from "../controllers/ContaController";

const routers = Router();

routers.get('/', ContaController.listaContas );
routers.get('/:id', ContaController.listaUm );

routers.post('/', ContaController.criar );
routers.put('/:id', ContaController.update );

routers.delete('/:id', ContaController.destroy );
routers.delete('/', ContaController.destroy );

export default routers;