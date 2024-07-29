import express from "express";
import { productController } from "./Product.controller";

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.getAllProduct);

export const productRouter = router;
