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

const getOneProduct = async (_id: string) => {
  const result = await Product.findById({ _id });
  return result;
};

const updateProduct = async (
  _id: string,
  updateProductData: Partial<TProduct>
) => {
  const result = await Product.findByIdAndUpdate(_id, updateProductData, {
    new: true,
  });
  return result;
};

const deleteProduct = async (_id: string) => {
  const result = await Product.findByIdAndDelete({ _id });
  return result;
};

export const productService = {
  createProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
