import { Request, Response } from "express";
import { ListCategoriesService } from "../../services/Categories/ListCategoriesService";



class ListCategoriesController{
    async handle(req:Request,res:Response){
             
        const lcs = new ListCategoriesService();
        const ctgs = await lcs.execute();

        return res.json(ctgs)
    }
}

export {ListCategoriesController}