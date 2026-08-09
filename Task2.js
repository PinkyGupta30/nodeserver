const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    // 1. Show the HTML page
    if (url === "/" && method === "GET") {

        fs.readFile("message.txt", "utf8", (err, data) => {

            res.setHeader("Content-Type", "text/html");

            res.end(`
                <h1>${data || "No name added yet"}</h1>

                <form action="/message" method="POST">
                    <label>Name:</label>
                    <input type="text" name="username">
                    <button type="submit">Add</button>
                </form>
            `);
        });
    }

    // 2. Receive the form data
    if (url === "/message" && method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        // 3. When all data is received
        req.on("end", () => {

            const username = body.split("=")[1];

            // 4. Save the name into the file
            fs.writeFile("message.txt", username, (err) => {

                if (err) {
                    console.log(err);
                    return;
                }

                // 5. Redirect back to /
                res.statusCode = 302;
                res.setHeader("Location", "/");

                res.end();
            });
        });
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});