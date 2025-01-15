const express = require("express");
const { fetchRandomImage } = require("../Controllers/imageController");

const router = express.Router();

router.get("/random-image", fetchRandomImage);

module.exports = router;
