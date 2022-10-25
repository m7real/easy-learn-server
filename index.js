const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// cors used to handle cross origin resource sharing
app.use(cors());

const courses = require("./data/courses.json");

// api on root route for testing purpose
app.get("/", (req, res) => {
  res.send("API RUNNING");
});

// API to get all courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log("SERVER Running on Port", port);
});
