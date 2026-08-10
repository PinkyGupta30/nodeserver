const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");

        res.end(`
            <h1>Hello World</h1>
            <p>Node.js server is running.</p>
        `);
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});