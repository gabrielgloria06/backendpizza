import { Product } from "./../../../node_modules/Backend/node_modules/Backend/node_modules/.prisma/client/index.d";
import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({ name,price,description, banner,category_id,}: ProductRequest) {

    const product = await prismaClient.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        banner:banner,
        category_id:category_id
      },

    });

    return product;
  }
}

export { CreateProductService };
