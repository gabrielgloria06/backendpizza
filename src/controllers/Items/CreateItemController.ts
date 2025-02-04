import { compare } from 'bcryptjs';
import {Request, Response} from 'express'
import { CreateitemService } from '../../services/Items/CreateItemService';


class CreateItemController{
    async handle(req:Request, res:Response){
         
        const {amount,order_id,product_id} =  req.body;

        const cis = new CreateitemService;

        const item = await cis.execute({amount,order_id,product_id})
        
        return res.json(item)
    }
}

export  {CreateItemController}