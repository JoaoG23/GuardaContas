import express from 'express';
import cors from 'cors';
import 'dotenv/config';


import contasRouters from './routers/contasRouters';
import usuarioRouters from './routers/usuarioRouters';
import estatisticaRputers from './routers/EstatisticaRouters';

import auth from './routers/Auth';

class App {
    
    public express:express.Application;
    
    public constructor(){
        this.express = express();
        this.middleware();
        this.routers();
    }
    
    private middleware():void{
        this.express.use(express.json())
        this.express.use(cors())
    }
    
    private routers():void{
        this.express.use( '/contas' , contasRouters);
        this.express.use('/usuarios', usuarioRouters);
        this.express.use('/estatistica', estatisticaRputers);
    }
}

export default new App().express;