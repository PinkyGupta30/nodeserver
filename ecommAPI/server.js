const express = require("express");

const app = express();
const port = 3000;

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});