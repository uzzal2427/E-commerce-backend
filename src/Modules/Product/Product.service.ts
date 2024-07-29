import { TProduct } from "./Product.interface";
import { Product } from "./product.model";

const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};

const getAllProduct = async () => {
  const result = await Product.find();
  return result;
};

export const productService = {
  createProduct,
  getAllProduct,
};
