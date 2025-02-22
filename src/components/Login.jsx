import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (email && password) {
      console.log("User signed up with", email, password);
      navigate("/");
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-96 bg-white shadow-2xl border border-gray-200 rounded-2xl flex flex-col items-center p-8"
      >
        <h2 className="text-4xl font-bold text-blue-500 mb-6">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSignup} className="flex flex-col gap-4 w-full">
          <input
            type="email"
            placeholder="Email"
            className="input w-full p-3 border rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input w-full p-3 border rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg w-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
