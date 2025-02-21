import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  updateProductImage,
} from "../controller/Product.js";
import uplodeFile from "../middlewares/multer.js";

const router = express.Router();
router.post("/product/new", isAuth, uplodeFile, createProduct);
router.get("/product/all", getAllProducts);
router.get("/product/:id", getSingleProduct);
router.put("/product/:id", isAuth, updateProduct);
router.post("/product/:id", isAuth, uplodeFile, updateProductImage);

export default router;
