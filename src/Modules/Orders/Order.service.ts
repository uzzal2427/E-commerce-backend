import { TOrder } from "./Order.interface";
import { Order } from "./Order.model";

const createOrder = async (payLoad: TOrder) => {
  const result = await Order.create(payLoad);
  return result;
};

const getAllOrder = async () => {
  const result = await Order.find();
  return result;
};

export const orderService = {
  createOrder,
  getAllOrder,
};
