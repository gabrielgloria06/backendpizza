import prismaClient from "../../prisma";

interface SendOrderRequest{
     order_id:string
}

class SendOrderService{
    async execute({order_id}: SendOrderRequest){

        const so = await prismaClient.order.update({
            where:{
                id:order_id
            },
            data:{
                draft: false
            }
          
        })

        return so;
    }
}

export {SendOrderService}