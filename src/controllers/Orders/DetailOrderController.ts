import {Request,Response} from 'express'
import { DetailOrderService } from '../../services/Orders/DetailOrderService';



class DetailOrderController{
    async handle(req:Request,res:Response){
        
        const order_id = req.query.order_id as string;

        const dos = new DetailOrderService;

        const orders = await dos.execute({order_id})

        return res.json(orders)
    }
}

export {DetailOrderController}