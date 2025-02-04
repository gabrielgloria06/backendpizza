import {Request,Response} from 'express'
import { ListOrdersService } from '../../services/Orders/ListOrdersService'



class ListOrdersController{
    async handle(req:Request,res:Response){
         
         const los = new ListOrdersService;

         const orders = await los.execute();

         return res.json(orders)
    }
}

export {ListOrdersController}