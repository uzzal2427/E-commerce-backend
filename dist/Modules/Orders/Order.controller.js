"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const Order_service_1 = require("./Order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = req.body;
    const result = yield Order_service_1.orderService.createOrder(orderData);
    try {
        res.status(200).json({
            success: true,
            message: "order confirm",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "order not complete",
            data: err,
        });
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Order_service_1.orderService.getAllOrder();
    try {
        res.status(200).json({
            success: true,
            message: " Orders fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Orders fetch unsuccessfully!",
            data: err,
        });
    }
});
const getOrderByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    const result = yield Order_service_1.orderService.getOrderByEmail(email);
    try {
        res.status(200).json({
            success: true,
            message: " Orders fetched successfully by email !",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Orders fetch unsuccessfully!",
            data: err,
        });
    }
});
exports.orderController = {
    createOrder,
    getAllOrder,
    getOrderByEmail,
};
