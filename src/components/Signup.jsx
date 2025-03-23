import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { signUp } from "../../API/authentication";

const Signup = () => {
 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.password) {
      const user =  await signUp(formData);
      if(!user) return setError("Error signing up. Please try again.");
      setAlert({ type: "success", message: "Check you Email for Confirmation" });
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-96 bg-white shadow-2xl border border-gray-200 rounded-2xl flex flex-col items-center p-8"
      >
        <h2 className="text-4xl font-bold text-blue-500 mb-6">Sign Up</h2>

                {alert && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`w-full p-3 text-center text-white font-semibold rounded-lg mb-4 ${
                      alert.type === "success" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {alert.message}
                  </motion.div>
                )}
        
        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <form onSubmit={handleSignup} className="flex flex-col gap-4 w-full">
          {/* First & Last Name on the same row */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 border rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 border rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg w-full shadow-lg transition-all duration-300"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 font-semibold cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
