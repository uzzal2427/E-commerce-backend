"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Product_route_1 = require("./Modules/Product/Product.route");
const Order_route_1 = require("./Modules/Orders/Order.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/products", Product_route_1.productRouter);
app.use("/api/orders", Order_route_1.orderRoutes);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
//
exports.default = app;
