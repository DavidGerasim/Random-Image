const express = require("express");
const cors = require("cors");
const path = require("path");
const imageRoutes = require("./Routes/imageRoutes");

const app = express();
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "public", "images")));

app.use("/", imageRoutes);

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
