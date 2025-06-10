import axios from "../../api/axiosConfig";
import { loadUser } from "../reducers/userSlice";

export const asyncRegisteruser = (user) => async(dispatch, getState)=>{
  try {
   const res = await axios.post("/users", user);
   console.log(res)
   
  } catch (error) {
    console.log(error)
  }
}
