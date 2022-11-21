import axios from "axios";

type AuthType = {
  username: string;
  password: string;
};

export async function signup(data: AuthType) {
  return await axios.post(process.env.REACT_APP_API_URI + "/signup", data);
}

export async function signin(data: AuthType) {
  return await axios.post(process.env.REACT_APP_API_URI + "/signin", data);
}
