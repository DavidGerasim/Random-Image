const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "public", "images")));

app.get("/random-image", (req, res) => {
  const imageDirectory = path.join(__dirname, "public", "images");
  const files = fs.readdirSync(imageDirectory);
  const randomFile = files[Math.floor(Math.random() * files.length)];
  res.json({ imageUrl: `http://localhost:3001/images/${randomFile}` });
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
