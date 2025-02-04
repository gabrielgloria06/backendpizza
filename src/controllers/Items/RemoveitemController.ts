import {Request,Response} from 'express'
import { RemoveItemService } from '../../services/Items/RemoveItemService';

class RemoveItemController{
    async handle(req:Request,res:Response){
         
        const item_id = req.query.item_id as string;

        const ris = new RemoveItemService;

        const ri = await ris.execute({item_id})
         
        return res.json(ri);
          
    }
}

export {RemoveItemController}