import axios from "axios";

const API_URL = "http://localhost:8000";

export const analyzeSentiment = async (text) => {
  try {
    const response = await axios.post(
      `${API_URL}/predict`,
      {
        text,
      }
    );

    return response.data;

  } catch (error) {

    console.error("AI API Error:", error);

    return {
      sentiment: "error",
      confidence: 0,
      scores: {
        positif: 0,
        negatif: 0,
      },
    };
  }
};