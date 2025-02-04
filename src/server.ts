import express, {Request,Response,NextFunction} from 'express'
import {router} from './routes'
import cors from 'cors'
import path from 'path'
import fileUpload from 'express-fileupload'

const app = express();

app.use(express.json())

app.use(cors())
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}))

app.use(router);

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')) )

app.use((err: Error, req: Request, res:Response, next: NextFunction)=>{

     if(err instanceof Error){
        //se err for um mesmo um erro
        return res.status(400).json({
            error: err.message
        })
     }

      // Se não for um erro do tipo Error (erro inesperado)
     return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
     })

})


app.listen(process.env.PORT,()=>{
    console.log('Rodou amor')
})