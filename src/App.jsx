import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Body />} />
          <Route path="/contact" element={<div className='text-center py-20 text-2xl'>Contact Us Page</div>} />
          <Route path="/login" element={<div className='text-center py-20 text-2xl'>Login Page</div>} />
          <Route path="/signup" element={<div className='text-center py-20 text-2xl'>Sign Up Page</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
