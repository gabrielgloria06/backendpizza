import prismaClient from "../../prisma";

interface ItemRequest{
    amount: number,
    order_id:string,
    product_id: string
}

class CreateitemService{
    async execute({amount,order_id,product_id}:ItemRequest){
            
        const item = await prismaClient.item.create({
            data:{
                amount:amount,
                order_id:order_id,
                product_id: product_id
            },
            include:{
                order:true,
                product:true
            }
        })

        return item;
    }
}

export {CreateitemService}