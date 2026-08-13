const express = require("express");
const app = express();
let port = 3000;

app.get("/api/products", (req, res) => {
    res.sendFile(__dirname + "/VIEW/products.html");
});

app.listen(port,()=>
{
    console.log("server is running");
})