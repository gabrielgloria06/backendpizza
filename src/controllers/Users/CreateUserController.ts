import {Request, Response} from 'express'
import { CreateUserService } from '../../services/users/CreateUserService'

class CreateUserController{
     
    async handle(req: Request, res:Response){
        
        const {name, email, password} = req.body

        const cus = new CreateUserService();

         const user = await  cus.execute({
            name,
            email,
            password
         });

         return res.json(user)
    }


}

export {CreateUserController}