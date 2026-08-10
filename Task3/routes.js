const fs = require("fs");

const routes = (req, res) => {

    const url = req.url;
    const method = req.method;

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

    if (url === "/message" && method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const username = body.split("=")[1];

            fs.writeFile("message.txt", username, (err) => {

                if (err) {
                    console.log(err);
                    return;
                }

                res.statusCode = 302;
                res.setHeader("Location", "/");
                res.end();
            });
        });
    }
};

module.exports = routes;