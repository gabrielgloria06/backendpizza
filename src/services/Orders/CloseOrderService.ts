import prismaClient from "../../prisma";


interface CloseOrderRequest{
    order_id: string
}

class CloseOrderService{
    async execute({order_id}:CloseOrderRequest){

         const co = await prismaClient.order.delete({
            where:{
                id:order_id
            }
         }) 

         return co;
    }
}

export {CloseOrderService}