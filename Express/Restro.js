const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my restaurant!");
});

app.get("/menu", (req, res) => {
    res.send("Here is our menu");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});