import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";


const Home = () => (
  <>
    <Hero />
    <Body />
  </>
);

const AuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      navigate("/dashboard", { state: { user: userData.user_metadata.firstName } });
    }
  }, []);

  return null;
};

const App = () => {


  return (
    <Router>
      <AuthRedirect />
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/login" element={<><Header /><Login /><Footer /></>} />
          <Route path="/signup" element={<><Header /><Signup /><Footer /></>} />
          <Route path="/dashboard" element={<Dashboard />} />
     
        </Routes>

      </div>
    </Router>
  );
};

export default App;
