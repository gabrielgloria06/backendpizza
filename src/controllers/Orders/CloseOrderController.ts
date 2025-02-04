import {Request,Response} from 'express'
import { CloseOrderService } from '../../services/Orders/CloseOrderService';

class CloseOrderController{
    async handle(req:Request, res:Response){
            
        const order_id = req.query.order_id as string;
        
        const cos = new CloseOrderService;

        const co = await cos.execute({order_id})

        return res.json(co)
    }
}

export {CloseOrderController}