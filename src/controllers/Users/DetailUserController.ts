import {Request,Response} from 'express'
import { DetailUserService } from '../../services/users/DetailUserService'



class DetailUserController{
    async handle(req:Request,res:Response){

        const user_id = req.user_id;
         
        const uds = new DetailUserService();

        const ud = await uds.execute(user_id);

        return res.json(ud)
    }
}

export {DetailUserController}