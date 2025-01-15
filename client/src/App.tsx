import React, { useState } from "react";

const App: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch("http://localhost:3001/random-image");
      const data = await response.json();
      setImage(data.imageUrl);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <div className="App">
      <h1>Random Image Fetcher</h1>
      <button onClick={fetchRandomImage}>Get Random Image</button>
      {image && <img src={image} alt="Random" />}
    </div>
  );
};

export default App;
