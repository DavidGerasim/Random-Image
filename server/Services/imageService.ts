export const fetchRandomImageFromAPI = async (): Promise<string> => {
  try {
    const response = await fetch("/random-image");
    const data = await response.json();
    return data.imageUrl;
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
};
