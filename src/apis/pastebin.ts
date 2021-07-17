import axios from "axios";

export default axios.create({
  baseURL:
    "https://pastebin.com/api/api_post.php",
  headers: {
    "Content-type": "application/x-www-form-urlencoded"
  }
});
