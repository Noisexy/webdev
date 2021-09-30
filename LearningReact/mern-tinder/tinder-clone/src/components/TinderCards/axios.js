import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-backend-mernstack.herokuapp.com",
});

export default instance;
