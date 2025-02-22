import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (email && password) {
      // Mock authentication for now
      console.log("User signed up with", email, password);
      navigate("/"); // Redirect to home after signup
    } else {
      
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600">
      <div className="card w-96 bg-base-100 shadow-xl p-6 border border-gray-200 rounded-lg">
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold w-full hover:opacity-90 transition-all duration-300">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
