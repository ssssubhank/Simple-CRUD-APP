const express = require("express");
const mongoose = require("mongoose");

const FormRoute = require("./form.routes");

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("/api/form", FormRoute);

const uri =
  "mongodb+srv://admin:admin@backend.3fn3q.mongodb.net/?retryWrites=true&w=majority&appName=BackEnd";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error in connecting to MongoDB:", error);
  });

server.get("/", (req, res) => {
  res.status(200).send("Home page");
});

server.listen(5001, () => {
  console.log("Server listening at 5001");
});
