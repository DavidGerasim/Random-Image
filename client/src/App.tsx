import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getRandomImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/random-image");
      const data = await response.json();
      setImageUrl(data.imageUrl);
    } catch (err) {
      setError("Failed to fetch image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Random Image</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {imageUrl && <img src={imageUrl} alt="Random" />}
      <button onClick={getRandomImage}>
        {loading ? "Loading..." : "Get New Random Image"}
      </button>
    </div>
  );
};

export default App;
