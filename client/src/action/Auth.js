import { redirect } from "react-router-dom";
import { getCookie } from "./Cookie";


export function getUserInfo() {
  const user = JSON.parse(localStorage.getItem('user-info'));
  return user;
}


export function getTokenDuration() {
  const storedExpirationDate = getCookie("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = getCookie("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  const token = getAuthToken();
  return token;
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/login");
  }

  return token;
}

