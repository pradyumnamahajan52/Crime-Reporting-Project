import { redirect } from "react-router-dom";
import { getCookie } from "../../utils/Cookie";


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
    return redirect("/user/login");
  }

  return token;
}

export function checkAdminAuthLoader() {
  const token = getAuthToken();
  const userInfo = getUserInfo();

  if (!token) {
    return redirect("/user/login");
  }

  if (userInfo.role !== "ADMIN") {
    return redirect("/user/login");
  }

  return token;
}



export function checkPoliceAuthLoader() {
  const token = getAuthToken();
  const userInfo = getUserInfo();

  if (!token) {
    return redirect("/user/login");
  }

  if (userInfo.role !== "POLICE") {
    return redirect("/user/login");
  }

  return token;
}



export function checkCitizenAuthLoader() {
  const token = getAuthToken();
  const userInfo = getUserInfo();

  if (!token) {
    return redirect("/user/login");
  }

  if (userInfo.role !== "CITIZEN") {
    return redirect("/user/login");
  }

  return token;
}






