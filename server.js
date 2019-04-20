const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const stripe = require("stripe")("sk_test_4uTrPeq8JDUTDumv8qDek87x");
const expHRS = require("express-handlebars");
const port = process.env.PORT || 4002;
const static = express.static;
const cors = require("cors");
// server.engine("handlebars", expHRS({ defaultLayout: "main" }));
// server.set("view engine", "handlebars");
// let fs = require("fs");
// var https = require("https");
// var httpsServer = https.createServer(server);
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// https.createServer(
//   {
//     key: fs.readFileSync("server.key"),
//     cert: fs.readFileSync("server.cert")
//   },
//   server
// );
// server.use(static(`${__dirname}/public`));

server.get("/", (req, res) => {
  // res.render("index");
  res.send("ipa is runnig ");
});

server.post("/charge", (req, res) => {
  console.log("====>", req.body);
  const amount = 2000;
  stripe.customers
    .create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken
    })
    .then(customer => {
      stripe.charges.create({
        amount: amount,
        description: "trip",
        currency: "usd",
        customer: customer.id
      });
    })
    .then(charge => {
      res.send("success");
    });

  // res.send("myapp");
});

server.get("/api", (req, res) => {
  res.send("here   api ");
});

server.post("/api", (req, res) => {
  console.log("====>", req.body.token);
  console.log("====>", req.body.email);
  const amount = 2000;
  const token = req.body.token;
  if (!token) {
    res.send("there is no token");
  }

  stripe.customers
    .create({
      email: req.body.email,
      source: req.body.token
    })
    .then(customer => {
      stripe.charges.create({
        amount: amount,
        description: "trip",
        currency: "usd",
        customer: customer.id
      });
    })
    .then(charge => {
      res.send("success");
    });
});
server.listen(port, () => {
  console.log(" server is on port 4002");
});
