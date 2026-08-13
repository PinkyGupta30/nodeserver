const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/api/products", (req, res) => {
    res.sendFile(__dirname + "/VIEW/products.html");
});

app.post("/products", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});