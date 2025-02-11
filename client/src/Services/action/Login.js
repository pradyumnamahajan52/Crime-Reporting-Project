import axios from "axios";
import { API } from "../../API";

const API_BASE_URL = `${API}/users/register`;


const sendRequest = async (url, data) => {
  try {
    const res = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data; 
  } catch (error) {
    console.error("Error in API request:", error);
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export const registerPolice = async (data) => {
  return sendRequest(`${API_BASE_URL}/police`, data);
};

export const registerCitizen = async (data) => {
  return sendRequest(`${API_BASE_URL}/citizen`, data);
};
