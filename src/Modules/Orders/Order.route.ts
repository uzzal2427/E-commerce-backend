import express from "express";
import { orderController } from "./Order.controller";

const router = express.Router();

router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrder);
router.get("/email", orderController.getOrderByEmail);

export const orderRoutes = router;
