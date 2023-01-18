import {Router} from "express";
import * as productsController from "../controllers/products.controller.js";

const router = Router();

router.post("/", productsController.createProduct);

router.get("/", productsController.getProducts);

router.get("/:pid", productsController.getProductById);

router.put("/:pid", productsController.updateProductById);

router.delete("/:pid", productsController.deleteProductById);

export default router;
