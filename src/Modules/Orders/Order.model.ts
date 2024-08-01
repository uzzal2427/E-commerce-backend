import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  productId: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
