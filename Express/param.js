const express = require("express");

const app = express();
const port = 4000;

app.get("/welcome/:username", (req, res) => {
    const username = req.params.username;
    const role = req.query.role;

    res.send(`Welcome ${username}, your role is ${role}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});