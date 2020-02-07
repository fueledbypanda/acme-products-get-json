const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");

app.get("/", (req, res) =>
  res.sendFile("/Users/panda/Desktop/acme-products-get-json/index.html")
);

app.get("/api/products", (req, res) =>
  res.sendFile("/Users/panda/Desktop/acme-products-get-json/products.json")
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
