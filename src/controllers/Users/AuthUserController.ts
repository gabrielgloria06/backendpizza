import {Request,Response} from 'express'
import { AuthUserService } from '../../services/users/AuthUserService';


class AuthUserController{
    async handle(req:Request,res:Response){
        const {email, password} = req.body; 

        const aus = new AuthUserService();

        const au = await aus.execute({email, password});

        return res.json(au);
    }
}

export {AuthUserController}