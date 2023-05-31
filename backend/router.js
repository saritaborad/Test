const express = require("express");
const router = express.Router();
const products = require("./data");

router.get("/products", (req, res) => {
 return res.json({ data: products, message: "product get success", success: true });
});

module.exports = router;
