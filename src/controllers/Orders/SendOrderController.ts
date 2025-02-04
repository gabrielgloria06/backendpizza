import {Request,Response} from 'express'
import { SendOrderService } from '../../services/Orders/SendOrderService';


class SendOrderController{
    async handle(req:Request,res:Response){
          const {order_id} = req.body;

          const sos = new SendOrderService;

          const so = await sos.execute({order_id})

          return res.json(so)
    }
}

export {SendOrderController}