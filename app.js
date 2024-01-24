// console.log("Back-end kieti vyrukai");

// const information = require("./modules/info");
// console.log(information);

const products = require("./data");
const express = require("express");
const { add } = require("nodemon/lib/rules");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/cia/yra/mano/route", (request, response) => {
  response.send(products);
});
app.get("/cia/yra/mano/route/:id", (req, res) => {
  const product = products.find((prod) => prod.id === parseInt(req.params.id));

  if (!product) {
    res.status(404).send("Product not found");
  }
  res.send(product);
});

// Ideda i postmana POST

app.post("/cia/yra/mano/route", (req, res) => {
  const newProduct = {
    id: 5,
    product: "Watch",
  };
  products.push(newProduct);
  res.send(products);
});

// Pakeisti su PUT (update)

app.put("/cia/yra/mano/route/:id", (req, res) => {
  const myProduct = products.find(
    (prod) => prod.id === parseInt(req.params.id)
  );

  if (!myProduct) {
    res.status(404).send("Product not found");
  }
  myProduct.product = req.body.product;
  res.send(myProduct);
});

app.delete("/cia/yra/mano/route/:id", (req, res) => {
  const myProduct = products.find(
    (prod) => prod.id === parseInt(req.params.id)
  );

  if (!myProduct) {
    res.status(404).send("Product not found");
  }
  const productIndex = products.indexOf(myProduct);
  products.splice(productIndex, 1);

  res.send(myProduct);
});

app.use(express.json());
const PORT = 5000;
app.listen(PORT || 7000, () => {
  console.log("server is running on port " + PORT);
});
