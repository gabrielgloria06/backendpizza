import prismaClient from "../../prisma";

interface ProductRequest{
    category_id:string
}


class ListProductsService{
    async execute({category_id}:ProductRequest){

        if(!category_id){
            throw new Error("Informa a categoria krai")
        }

        const pds = await prismaClient.product.findMany({
            where:{
                category_id:category_id
            }
        })

        return pds;
    }
}

export {ListProductsService}