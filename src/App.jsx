import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
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
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
