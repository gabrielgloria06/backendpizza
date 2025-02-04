import prismaClient from "../../prisma";
import {hash} from 'bcryptjs'


interface UserRequest {
    name : string;
    email : string;
    password: string;
}

class CreateUserService{
     async execute({name,email,password}:UserRequest){

        if(!email){
            throw new Error("Porfavor informe um email!")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Usuário já existe, faça login...")
        }

        const senhaHash = await hash(password, 8 )

        const user = await prismaClient.user.create({
            data:{
                name:name,
                email:email,
                password:senhaHash
            },
            select:{
                id:true,
                name:true,
                email:true
            }
        })

        return user;
     }
}

export {CreateUserService}
