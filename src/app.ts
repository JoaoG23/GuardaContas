import express from 'express';
import cors from 'cors';

import 'dotenv/config';


import routersContas from './routers/contasRouters';
import usuarioRouters from './routers/usuarioRouters';

class App {
    
    public express:express.Application;
    public env:any;
    
    public constructor(){
        this.express = express();
        this.middleware();
        this.routers();
    }
    
    private middleware():void{
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database():void{
    }
    
    private routers():void{
        this.express.use('/contas', routersContas);
        this.express.use('/usuarios', usuarioRouters);
    }
}

export default new App().express;