import express, { Request, Response, NextFunction, json } from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        msg: `API NodeJS funcionando correctamente`
    });
});

app.listen(9000, () =>{
    console.log(`Servidor Express corriendo en el puerto 9000`);
});