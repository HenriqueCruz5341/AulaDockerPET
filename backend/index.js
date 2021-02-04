const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const cors = require("cors");

const app = express();

const usersRoute = require("./routes/user");

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Conneted to db!")
);

app.use(express.json());
app.use(cors());

app.use("/users", usersRoute);
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

app.listen(process.env.PORT || 3333, () => console.log("Server running..."));
