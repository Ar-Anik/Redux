import React from "react";
import "./App.css";
import Home from "./pages/home";
import Blog from "./pages/blog";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
