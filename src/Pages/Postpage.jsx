import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Base/Navbar";

function Postpage() {
  const [posts, setPosts] = useState([]);
  let { id } = useParams();
  const image1 = `uploads/${posts.image}`;
  useEffect(() => {
    fetch(`/api/getOne/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <React.StrictMode>
      <Navbar />
      <div className="post-card" key={posts.id}>
        <h5>{posts.News_category}</h5>
        <h1 className="news_title">{posts.News_title}</h1>
        <img src={image1} alt="" />
        <p className="post-body">{posts.News_description}</p>
      </div>
    </React.StrictMode>
  );
}

export default Postpage;
