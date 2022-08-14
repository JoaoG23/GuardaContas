import { Router } from "express";
import EstatisticaController from '../controllers/EstatisticaController';

const routers = Router();

routers.get('/contagem', EstatisticaController.contarQuantasContasRegistrada );

export default routers;