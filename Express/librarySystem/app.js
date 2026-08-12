const express = require("express");
const app = express();
const port = 3000;

const booksRouter = require("./Book");

app.use(express.json());

app.use("/",booksRouter);

app.listen(port,()=>
{
    console.log(`server is running on port ${port}`);
})