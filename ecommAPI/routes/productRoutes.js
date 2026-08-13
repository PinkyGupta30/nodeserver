const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");

router.get("/", productController.getProducts);

router.post("/", productController.addProducts);

router.get("/:id", productController.productById);

module.exports = router;