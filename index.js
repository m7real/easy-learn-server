const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// cors used to handle cross origin resource sharing
app.use(cors());

// api on root route for testing purpose
app.get("/", (req, res) => {
  res.send("API RUNNING");
});

app.listen(port, () => {
  console.log("SERVER Running on Port", port);
});
