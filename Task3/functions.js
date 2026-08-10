const fs = require("fs");

function saveMessage(message) {
    fs.writeFile("message.txt", message, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = saveMessage;