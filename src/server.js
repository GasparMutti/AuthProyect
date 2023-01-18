import express from "express";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes.js";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use("/products", productsRoutes);

server.get("/", (req, res) => {
  res.send("<h1>Hola</h1>");
});

export default server;
