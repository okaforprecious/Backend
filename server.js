const express = require("express");
// const mongoose = require("mongoose");

const colors = require("colors");
const cors = require("cors");
const bodyParser = require("body-parser");
// import express from express
const taskRoutes = require("./Routes/TaskRoutes");
const dotenv = require("dotenv").config();
connectDB = require("./Config/db");

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use("/api/Task", taskRoutes);

const port = process.env.port;

app.listen(port, () => console.log(`Server running on port ${port}`));
