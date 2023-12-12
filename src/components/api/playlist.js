import axios from "axios";
const server_url = "http://localhost:8000";

export const getPlaylist = async () => {
  try {
    const playlist = await axios.get(`${server_url}/`);
    return playlist;
  } catch (error) {
    console.error(error);
  }
};
