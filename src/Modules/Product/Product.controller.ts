import { Request, Response } from "express";
import { productService } from "./Product.service";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await productService.createProduct(productData);
  try {
    res.status(200).json({
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

export const productController = {
  createProduct,
  getAllProduct,
};
