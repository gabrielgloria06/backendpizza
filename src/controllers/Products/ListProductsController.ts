import {Request,Response} from 'express'
import { ListProductsService } from '../../services/Products/ListProductsService'


class ListProductsController{
    async handle(req:Request,res:Response){

        const category_id = req.query.category_id as string
          
        const lps = new ListProductsService();

        const pds = await lps.execute({category_id});


        return res.json(pds)

    }
}

export {ListProductsController}