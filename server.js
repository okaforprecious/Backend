const express = require("express");
const connectDB = require("./Config/db");
const colors = require("colors");
// import express from express

const dotenv = require("dotenv").config();
connectDB();

const app = express();
app.get("/", (req, res) =>
  res.json({
    message: "welcome to whoba ogo",
  })
);
app.get("/h", (req, res) =>
  res.json({
    message: "God is Good",
  })
);
const people = [
  {
    id: 1,
    age: 56,
    city: "owerri",
  },
  {
    id: 2,
    age: 34,
    city: "enugu",
  },
  {
    id: 3,
    age: 12,
    city: "abia",
  },
];

app.get("/students", (req, res) => res.json(people));

const port = process.env.port;

app.listen(port, () => console.log(`Server running on port ${port}`));
