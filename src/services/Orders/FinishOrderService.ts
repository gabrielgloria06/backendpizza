import prismaClient from "../../prisma";


interface FinishRequest{
    order_id:string
}

class FinishOrderService{
    async execute({order_id}:FinishRequest){
         
        const fo = await prismaClient.order.update({
            data:{
               status:true
            },
            where:{
                id:order_id
            }
        })

        return fo;
    }
}

export {FinishOrderService}