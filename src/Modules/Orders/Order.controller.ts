import { Request, Response } from "express";
import { orderService } from "./Order.service";

const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;
  const result = await orderService.createOrder(orderData);
  try {
    res.status(200).json({
      success: true,
      message: "order confirm",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "order not complete",
      data: err,
    });
  }
};
const getAllOrder = async (req: Request, res: Response) => {
  const result = await orderService.getAllOrder();
  try {
    res.status(200).json({
      success: true,
      message: " Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Orders fetch unsuccessfully!",
      data: err,
    });
  }
};

const getOrderByEmail = async (req: Request, res: Response) => {
  const { email } = req.query;
  const result = await orderService.getOrderByEmail(email as string);
  try {
    res.status(200).json({
      success: true,
      message: " Orders fetched successfully by email !",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Orders fetch unsuccessfully!",
      data: err,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrder,
  getOrderByEmail,
};
