import React from "react";
import Home from "./pages/home";
import Video from "./pages/video";
import Nabvar from "./components/nabvar/nabvar";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nabvar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
