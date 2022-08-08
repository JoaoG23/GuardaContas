import express from 'express';
import cors from 'cors';
import 'dotenv/config';


import routersContas from './routers/contasRouters';
import usuarioRouters from './routers/usuarioRouters';
import auth from './routers/auth';



class App {
    
    public auth:object;
    public express:express.Application;
    
    public constructor(){
        this.express = express();
        this.middleware();
        this.routers();
        this.auth = auth;
    }
    
    private middleware():void{
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database():void{
    }
    
    private routers():void{
        this.express.use( '/contas', auth.comum, routersContas);
        this.express.use('/usuarios', usuarioRouters);
    }
}

export default new App().express;