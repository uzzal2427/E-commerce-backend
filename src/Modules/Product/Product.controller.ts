import { Request, Response } from "express";
import { productService } from "./Product.service";
import productValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;

  // validate data before creating product by joi
  const { error } = productValidationSchema.validate(productData);
  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      data: error.details,
    });
  }
  const result = await productService.createProduct(productData);

  try {
    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product is not created",
      data: err,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  const result = await productService.getAllProduct();
  try {
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product fetch unsuccessful",
      data: err,
    });
  }
};
const getOneProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await productService.getOneProduct(productId);
  try {
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product fetch unsuccessful",
      data: err,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const productData = req.body;
  const result = await productService.updateProduct(productId, productData);
  try {
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product update unsuccessful",
      data: err,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await productService.deleteProduct(productId);
  try {
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product delete unsuccessful",
      data: err,
    });
  }
};

export const productController = {
  createProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
