const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// cors used to handle cross origin resource sharing
app.use(cors());

const courses = require("./data/courses.json");
const blogs = require("./data/blogs.json");
const faq = require("./data/faq.json");

// api on root route for testing purpose
app.get("/", (req, res) => {
  res.send("API RUNNING");
});

// API to get all courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

// API to get single course through id
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c._id === id);
  res.send(course);
});

// API to get blogs
app.get("/blogs", (req, res) => {
  res.send(blogs);
});

// API to get FAQ
app.get("/faq", (req, res) => {
  res.send(faq);
});

app.listen(port, () => {
  console.log("SERVER Running on Port", port);
});
