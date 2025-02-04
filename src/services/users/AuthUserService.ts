import prismaClient from "../../prisma";
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

interface AuthUserRequest{
    email: string;
    password: string;
}


class AuthUserService{
    async execute({email,password}: AuthUserRequest){

        //verifica se o email informado ja foi cadastrado
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })
        
        //não?
        if(!user){
            throw new Error("Email/senha incorretos")
        }

        //verifica se a senha está correta
        const pm = await compare(password, user.password)

        //não?
        if(!pm){
          throw new Error("Email/senha incorretos")
        }


        //Agora gerar token JWT para autenticação que conterá id, name, email
       const token = sign(
        {
         name: user.name,
         email: user.email
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: '30d'
        }
    )

    return {
        id:user.id,
        name:user.name,
        email:user.email,
        token:token
    }
          
    }
}

export {AuthUserService}