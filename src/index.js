import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Pages/Post";
import Homepage from "./Pages/Homepage";
import Postpage from "./Pages/Postpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/postpage" element={<Post />} />
      <Route exact path="/:id" element={<Postpage />} />
    </Routes>
  </BrowserRouter>
);
