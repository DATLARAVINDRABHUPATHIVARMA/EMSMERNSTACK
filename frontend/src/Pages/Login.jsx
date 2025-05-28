import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const toggleVisibility = () => setVisiblePassword(!visiblePassword)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      if (response.data.success) {
        login(response.data.user);
        console.log(response.data.user);
        localStorage.setItem("token", response.data.token);
        if (response.data.user.webRole === "admin") {
          navigate("/admin-dashboard");
        } else if (response.data.user.webRole === "manager") {
          navigate("/manager-dashboard");
        } else if (response.data.user.webRole === "staff") {
          navigate("/staff-dashboard");
        } else {
          navigate("/employee-dashboard");
        }
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        setError(error.response.data.error);
      } else {
        setError("abc error");
      }
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-purple-500 from-50% to-gray-100 to-50% space-y-6">
      <h2 className="font-oswald text-3xl text-white">
        SEVEN HILLS AND LIV SIGNITY EMPLOYEE MANAGEMENT SYSTEM
      </h2>
      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <div className="relative flex justify-between">
              <input
                type={visiblePassword ? "text" : "password"}
                className="w-full  px-3 py-2 border"
                placeholder="**********"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="absolute inset-y-0 right-0 px-2 py-2 text-grey-500 hover:text-purple-500 transition-colors duration-100"
              >
                {visiblePassword ? <IoMdEye size={24}/> : <IoMdEyeOff size={24}/>}
              </button>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-md text-gray-700">Remember Me</span>
            </label>
            <a href="#" className=" text-sm text-blue-500">
              Forgot Password?
            </a>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
