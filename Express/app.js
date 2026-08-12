const express = require("express");

const app = express();
const port = 3000;

const routes = require("./Filters");

app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});