import { Router } from "express";
import EstatisticaController from '../controllers/EstatisticaController';

const routers = Router();

routers.get('/:tipo', EstatisticaController.controllerEmConstrucaoTest );

export default routers;