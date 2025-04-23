import express from "express";
import productRoutes from "./src/routes/product.routes";
import clientRoutes from "./src/routes/client.routes";
import brandRoutes from "./src/routes/brands.routes";

const app = express();

app.use(express.json());

app.use("/product", productRoutes);
app.use("/client", clientRoutes);
app.use("/brand", brandRoutes);

app.listen(3000, () => {
  console.log("Servidor executando na Porta 3000");
});