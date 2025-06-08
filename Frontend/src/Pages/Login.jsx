import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const submitHandler = (user) => {
    
    console.log(user);
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col w-1/2 gap-2 justify-center h-screen"
    >

      <input
        className=" outline-0 border-b p-2 text-2xl mb-3"
        type="email"
        placeholder="email"
        {...register("email")}
      />
      <input
        className=" outline-0 border-b p-2 text-2xl mb-3"
        type="password"
        placeholder="password"
        {...register("password")}
      />
      <button className="item-center justify-center bg-white text-black w-20 h-10 rounded-2xl">
        Login
      </button>
     <div className="flex gap-2">
     <p>Don't have a Account ?,</p>
      <Link to="/register" className="text-red-700">
        {" "}
        Click Here
      </Link>
     </div>
    </form>
  );
};

export default Login;
