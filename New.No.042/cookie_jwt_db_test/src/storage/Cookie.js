import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const setRefrestToken = (refreshToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);
  // 쿠키생성 name, value, option
  return cookies.set("refresh_token", refreshToken, {
    sameSite: "strict",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const getCookieToken = () => {
  return cookies.get("refresh_token");
};

export const removeCookieToken = () => {
  return cookies.remove("refresh_token", { sameSite: "strict", path: "/" });
};
