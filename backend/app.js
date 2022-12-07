const express = require("express");
require("./db");
const userRouter = require("./routes/user");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use("/api/user", userRouter);

app.get("/about", (req, res) => {
  res.send("<h1>Hello World! I am from you backend about</h1>");
});

app.listen(8000, () => {
  console.log("the port is listening on port 8000");
});
