const express = require("express");
const router = express.Router();

console.log("Product routes loaded");

router.get("/", (req, res) => {
    res.send("Fetching all products");
});

router.post("/", (req, res) => {
    res.send("Adding a new product");
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Fetching product with ID: ${id}`);
});

module.exports = router;