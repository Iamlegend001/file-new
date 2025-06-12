import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../Store/Actions/userActions";

const Nav = () => {
  const user = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandeler = () => {
    dispatch(asyncLogoutUser());
    navigate("/");
  };

  console.log(user);

  return (
    <div className="mb-10 flex justify-center py-4 bg-gray-50 border-b border-gray-200">
      <div className="flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-medium transition-colors duration-200 ${
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `text-lg font-medium transition-colors duration-200 ${
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`
          }
        >
          Products
        </NavLink>{" "}
        <NavLink
          to="/register"
          className={({ isActive }) =>
            `text-lg font-medium transition-colors duration-200 ${
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`
          }
        >
          Register
        </NavLink>
        {user ? (
          <>
            <NavLink
              to="/admin/create-product"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`
              }
            >
              Create Product
            </NavLink>
            <button
              className="text-lg font-medium transition-colors duration-200"
              onClick={logoutHandeler}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`
              }
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
