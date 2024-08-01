import express from "express";
import { orderController } from "./Order.controller";

const router = express.Router();

router.post("/api/orders", orderController.createOrder);
