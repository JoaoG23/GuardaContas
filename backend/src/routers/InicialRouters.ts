import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
const routers = Router();

routers.post('/register', UsuarioController.registrar );
routers.post('/logar', UsuarioController.logar );


export default routers;