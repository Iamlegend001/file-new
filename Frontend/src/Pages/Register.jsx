import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../Store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    dispatch(asyncRegisterUser(user));
    navigate("/login");
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(RegisterHandler)}
      className="flex flex-col w-1/2 gap-2 justify-center h-screen"
    >
      <input
        className=" outline-0 border-b p-2 text-2xl mb-3"
        type="text"
        placeholder="username"
        {...register("username", { required: "Required" })}
      />
      <small className="text-red-700">
        {errors.username && errors.username.message}
      </small>
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
        Register
      </button>
      <div className="flex gap-2">
        <p>Already have an Account ?,</p>
        <Link to="/login" className="text-red-700">
          {" "}
          Click Here
        </Link>
      </div>
    </form>
  );
};

export default Register;
