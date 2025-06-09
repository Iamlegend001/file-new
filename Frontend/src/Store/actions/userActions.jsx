import axios from "../../api/axiosConfig";
import { loaduser } from "../reducers/userSlice";

// LOGIN
export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/user?email=${user.email}&password=${user.password}`
    );

    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(loaduser(data[0]));
    } else {
      console.log("Invalid credentials");
    }
  } catch (error) {
    console.log("Login Error:", error);
  }
};

// LOGOUT
export const asyncLogoutUser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(loaduser(null));
  } catch (error) {
    console.log("Logout Error:", error);
  }
};

// CURRENT USER (LOAD FROM LOCAL STORAGE)
export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loaduser(user));
    } else {
      console.log("User Not Logged In");
    }
  } catch (error) {
    console.log("Current User Error:", error);
  }
};

// REGISTER
export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/user", user);
    console.log("Registered:", res.data);
  } catch (error) {
    console.log("Register Error:", error);
  }
};
