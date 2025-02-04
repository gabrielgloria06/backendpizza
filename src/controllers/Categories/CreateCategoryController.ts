import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/Categories/CreateCategoryService";




class CreateCategoryController{
    async handle(req:Request,res:Response){

        const {name} = req.body

        const ccs = new CreateCategoryService();
        const ctgry = await ccs.execute({name})

        return res.json(ctgry)
        
    }
}

export {CreateCategoryController}