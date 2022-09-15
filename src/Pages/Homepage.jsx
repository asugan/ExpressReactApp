import React from "react";
import "../Styles/App.scss";
import Navbar from "../Components/Base/Navbar";
import Price from "../Components/Base/Price";
import Firstnews from "../Components/Base/Firstnews";

function Homepage() {
  return (
    <React.StrictMode>
      <Navbar />
      <Price />
      <Firstnews />
    </React.StrictMode>
  );
}

export default Homepage;
