import express from "express";
import { productController } from "./Product.controller";

const router = express.Router();

router.post("/", productController.createProduct);

export const productRouter = router;
