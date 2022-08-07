import express from 'express';
import cors from 'cors';
// import * as dotenv from "dotenv";
// dotenv.config();

import 'dotenv/config'


import routers from './routers/routerController';
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

    private database():void{
    }
    
    private routers():void{
        this.express.use(routers);
        // this.express.get('/test', (req, res)=> {
        //     console.info(process.env.DB_PORT);

        //     res.send('Connn')

        // })
    }
}

export default new App().express;