import prismaClient from "../../prisma";

interface CreateCategoryRequest{
    name: string
}

class CreateCategoryService{
    async execute({name}: CreateCategoryRequest){


        if(!name){
            throw new Error("Bota o nome carai")
        }
          
          const ctgry = await prismaClient.category.create({
            data:{
                name:name
            },
            select:{
                id:true,
                name:true
            }
          })

          return ctgry;

    }
}

export {CreateCategoryService}