import { CreateUser } from "../interfaces/users.interfaces";
import { del, get, post } from "./request";

const BASE_URL = "http://localhost:7890";
// const BASE_URL = "/users";

export async function signUpUser(credentials: CreateUser) {
  const res = await post(`${BASE_URL}/users`, credentials);
  return res;
}

export async function signInUser(credentials: CreateUser) {
  const res = await post(`${BASE_URL}/users/sessions`, credentials);
  return res;
}

export async function verifyUser() {
  const res = await get(`${BASE_URL}/users/me`);
  return res;
}

export async function logOutUser() {
  const res = await del(`${BASE_URL}/users/sessions`);
  return res;
}
