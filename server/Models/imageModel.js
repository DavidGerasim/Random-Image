const fs = require("fs");
const path = require("path");

const getRandomImage = () => {
  const imageDirectory = path.join(__dirname, "..", "public", "images");
  const files = fs.readdirSync(imageDirectory);
  const randomFile = files[Math.floor(Math.random() * files.length)];
  return randomFile;
};

module.exports = { getRandomImage };
