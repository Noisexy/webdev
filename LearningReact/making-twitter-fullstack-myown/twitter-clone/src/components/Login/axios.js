import axios from "axios";

const instance = axios.create({
  baseurl: "http://localhost:8000",
});

export default instance;
