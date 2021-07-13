
import * as Types from "../types";
import axios from "axios";
const base_url = "http://localhost:8000"



//sendRequest

const sendRequest = async (url, method, body, headers = {}) => {
  const response = await axios({
    method,
    url: base_url + url,
    data: body,
    headers,
  });
  console.log(response);
  return response.data;
};
// Setup redux state
export const getAppState = async () => {
  const profile = await getProfile();
  // const streams = await getSubbedStreams();
  return { profile};
};

export const LOGIN = async (username: string, password: string) => {
  await sendRequest("/users/auth/login/", "POST", {
    username,
    password,
  });
};

export const logout = async () => {
  const res = await sendRequest("/users/auth/logout/", "POST", {});
  return res;
};

export const getProfile = async (): Promise<Types.UserData> => {
  const res = await sendRequest("/users/profile/", "GET");
  return res;
};

export const getIntern = async (): Promise<Types.InternData> => {
  const res = await sendRequest("/users/intern/", "GET");
  return res;
};
export const getPlacement = async (): Promise<Types.PlacementData> => {
  const res = await sendRequest("/users/placement/", "GET");
  return res;
};
// export const = async (token: string) => {
//   await sendRequest("/users/auth/login/", "POST", {
//     token
//   })
//   return res;
// };

// // Login
// export const LOGIN = async (url, username, password) => {
//   const user = {
//     username: username,
//     password: password,
//   };

//   const res = await fetch(base_url + url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   });

//   const response = await res.json();
//   return response;
// };
