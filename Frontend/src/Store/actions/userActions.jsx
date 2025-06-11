import axios from "../../api/axiosConfig";
import { loadUser } from "../reducers/userSlice";

export const asyncCurrentUser = (user) => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loadUser(user));
    else console.log("user not found");
  } catch (error) {
    console.log(error);
  }
};
export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    console.log(data[0]);
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};
export const asyncLogoutUser = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    console.log("user Logged Out")
  } catch (error) {
    console.log(error);
  }
};
export const asyncRegisteruser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
