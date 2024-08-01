import express, { Request, Response } from "express";
import { productRouter } from "./Modules/Product/Product.route";
import { orderRoutes } from "./Modules/Orders/Order.route";
const app = express();

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/orders", orderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

//

export default app;
