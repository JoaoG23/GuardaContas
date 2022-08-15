import express from 'express';
import cors from 'cors';
import 'dotenv/config';


import contasRouters from './routers/contasRouters';
import usuarioRouters from './routers/usuarioRouters';
import estatisticaRouters from './routers/EstatisticaRouters';
import inicialRoutes from './routers/InicialRouters';

import auth from './routers/Auth';
import path from 'path';

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
        this.express.use( '/contas' , auth.comum, contasRouters);
        this.express.use('/usuarios',auth.comum, usuarioRouters);
        this.express.use('/estatistica', auth.comum,estatisticaRouters);
        this.express.use('/auth', inicialRoutes);
        this.express.use('/', express.static(path.join(__dirname,'view')))
    }
}

export default new App().express;