import {Request,Response} from  'express'
import { FinishOrderService } from '../../services/Orders/FinishOrderService'

class FinishOrderController{
    async handle(req:Request,res:Response){

        const {order_id} = req.body;
        
        const fos = new FinishOrderService;

        const fo = await fos.execute({order_id})

        return res.json(fo)

    }
}

export {FinishOrderController}