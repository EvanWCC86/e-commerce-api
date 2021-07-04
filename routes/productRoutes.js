const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  getProductByCategory,
} = require("../controller/productControllers");

router.get("/", getProducts);

router.get("/:id", getProductById);

// check why :id and :slug can not use at the sametime
router.get("/category/:slug", getProductByCategory)




module.exports = router;




