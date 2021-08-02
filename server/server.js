var express = require("express");
var cors = require("cors");
var { getOrderedFromStock } = require("./modules/get-ordered");
const stock = require("./data/stock.json");

var app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.use(cors());

app.use(express.static("public"));

app.get("/products", (req, res, next) => {
    const { desc } = req.query;
    orderedList = getOrderedFromStock(desc, stock);
    res.json({
        "items": orderedList
    });
    next();
});

