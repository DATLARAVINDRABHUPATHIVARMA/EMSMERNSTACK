import React from "react";

const Login = () => {
  return (
    <div
      className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-purple-500 from-50% 
to-gray-100 to-50% space-y-6"
    >
      <h2 className="font-oswald text-3xl text-white">
        SEVEN HILLS AND LIV SIGNITY EMPLOYEE MANAGEMENT SYSTEM
      </h2>
      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border"
              placeholder="Enter Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <div className="relative flex justify-between">
              <input
                // type={visiblePassword ? "text" : "password"}
                type="password"
                className="w-full  px-3 py-2 border"
                placeholder="**********"
                //onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
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
