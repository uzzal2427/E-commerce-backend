"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const Product_controller_1 = require("./Product.controller");
const router = express_1.default.Router();
router.post("/", Product_controller_1.productController.createProduct);
router.get("/", Product_controller_1.productController.getAllProduct);
router.get("/:productId", Product_controller_1.productController.getOneProduct);
router.put("/:productId", Product_controller_1.productController.updateProduct);
router.delete("/:productId", Product_controller_1.productController.deleteProduct);
exports.productRouter = router;
