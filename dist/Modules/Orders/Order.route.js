"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Order_controller_1 = require("./Order.controller");
const router = express_1.default.Router();
router.post("/", Order_controller_1.orderController.createOrder);
router.get("/", Order_controller_1.orderController.getAllOrder);
router.get("/email", Order_controller_1.orderController.getOrderByEmail);
exports.orderRoutes = router;
