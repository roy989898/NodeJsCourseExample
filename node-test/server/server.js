const express = require("express");

let app = express();

app.get("/", (req, res) => {
    res.status(404).send({
        error: "Page not found",
        name: "Todo APP v1.0"
    });
});

app.listen(3000);

module.exports.app = app;