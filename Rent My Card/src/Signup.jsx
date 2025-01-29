// Signup.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Signup.css";
export default function SignUp() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F1F5F9] p-6">
        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-semibold text-center mb-8 text-[#1A202C]">Create an Account</h2>
          <form>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-4 rounded-lg border border-[#BEE3F8] focus:outline-none focus:ring-2 focus:ring-[#3182CE] transition-all hover:border-[#3182CE] hover:shadow-lg"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Email or Mobile"
                className="w-full p-4 rounded-lg border border-[#BEE3F8] focus:outline-none focus:ring-2 focus:ring-[#3182CE] transition-all hover:border-[#3182CE] hover:shadow-lg"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Create Password"
                className="w-full p-4 rounded-lg border border-[#BEE3F8] focus:outline-none focus:ring-2 focus:ring-[#3182CE] transition-all hover:border-[#3182CE] hover:shadow-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3182CE] text-white p-4 rounded-lg hover:bg-[#2B6CB0] transition transform hover:scale-105"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-[#4A5568] mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-[#3182CE] hover:text-[#2B6CB0]">Log In</a>
          </p>
        </div>
      </div>
    );
  }
  

