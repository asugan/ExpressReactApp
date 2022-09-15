import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Components/Post";
import Homepage from "./Pages/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/postpage" element={<Post />} />
    </Routes>
  </BrowserRouter>
);
