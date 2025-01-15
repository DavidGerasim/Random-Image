const { getRandomImage } = require("../Models/imageModel");

const fetchRandomImage = (req, res) => {
  try {
    const randomFile = getRandomImage();
    res.json({ imageUrl: `http://localhost:3001/images/${randomFile}` });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch random image" });
  }
};

module.exports = { fetchRandomImage };
