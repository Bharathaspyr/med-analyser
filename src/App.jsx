import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ConfirmEmail from "./components/ConfirmEmail";

const Home = () => (
  <>
    <Hero />
    <Body />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/login" element={<><Header /><Login /><Footer /></>} />
          <Route path="/signup" element={<><Header /><Signup /><Footer /></>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
