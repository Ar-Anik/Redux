import React from "react";
import "./App.css";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Navbar from "./components/navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
