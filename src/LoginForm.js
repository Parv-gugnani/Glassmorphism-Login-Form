import React from "react";
import { Tilt } from "react-tilt";
import "./LoginForm.css"; // Create a CSS file for custom styles

function LoginForm() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300">
      <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
        <div className="Tilt-inner p-8 bg-white rounded-lg shadow-md glassmorphism">
          <h2 className="text-3xl font-semibold text-center mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </Tilt>
    </div>
  );
}

export default LoginForm;
