import {Request, Response} from 'express'
import { CreateOrderService } from '../../services/Orders/CreateOrderService';

class CreateOrderController{

    async handle(req:Request,res:Response){

        const {table,name} = req.body;

        const cos = new CreateOrderService;
        const o = await cos.execute({table,name})

        return res.json(o)

    }

}

export {CreateOrderController}