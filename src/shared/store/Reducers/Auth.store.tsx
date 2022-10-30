import { createSlice } from "@reduxjs/toolkit";
import { errorMonitor } from "stream";
import { AppThunk } from "../index";

const userInfo = createSlice({
  name: "userinfo",
  initialState: {
    login: "",
    avatar_url: "",
    name: "",
    email: "@gmail.com",
    location: "",
    followers: 0,
    following: 0,
    bio: "",
    public_repos: 0,
  },
  reducers: {
    getUser(state, action) {
      state.login = action.payload.login;
      state.avatar_url = action.payload.avatar_url;
      state.name = action.payload.name;
      state.email = action.payload.login;
      state.location = action.payload.location;
      state.followers = action.payload.followers;
      state.following = action.payload.following;
      state.bio = action.payload.bio;
      state.public_repos = action.payload.public_repos;
    },
    logOut(state) {
      state.login = "";
      state.avatar_url = "";
      state.name = "";
      state.email = "";
      state.location = "";
      state.followers = 0;
      state.following = 0;
      state.bio = "";
      state.public_repos = 0;
    },
  },
});

export const { getUser, logOut } = userInfo.actions;
export default userInfo.reducer;

export function getUserData(githubUser: string): AppThunk {
  return async function (dispatch) {
    const data = await fetch(`https://api.github.com/users/${githubUser}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        // throw new Error("Usuário inválido!");
        return Promise.reject(response);
      })
      .then((responseJson) => {
        const {
          login,
          avatar_url,
          name,
          email,
          location,
          followers,
          following,
          bio,
          public_repos,
        } = responseJson;

        const bodyRequest = {
          login,
          avatar_url,
          name,
          email,
          location,
          followers,
          following,
          bio,
          public_repos,
        };

        dispatch(getUser(bodyRequest));

        return bodyRequest;
      })
      .catch((error) => {
        return error.status;
      });

    if (data === 404) {
      return "";
    }
    return data;
  };
}
