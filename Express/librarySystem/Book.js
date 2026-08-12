const express = require("express");
const router = express.Router();
router.get("/books",(req,res)=>
{
    console.log("GET request received for books");
    res.send("Here is the list of books!");
});
router.post("/books",(req,res)=>
{
    console.log(req.body);
    res.send("Book has been added");
});
module.exports = router;
