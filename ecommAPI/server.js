const express = require("express");

const app = express();
const port = 3000;

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const errorHandle = require("./errors/errorHandle");

app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// Centralized error handler — must be after all routes
app.use(errorHandle);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});