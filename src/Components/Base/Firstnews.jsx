import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/Navfooter.scss";
import "../../Styles/News.scss";

function Firstnews() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/api/getall")
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
    <div className="firstnews">
      <div className="secondgrid">
        {posts.map((post, id) => {
          return (
            <div className="post-card" key={id}>
              <h5>{post.News_category}</h5>
              <NavLink to={`${post._id}`}>
                <h1 className="news_title">{post.News_title}</h1>
              </NavLink>
              <img src={`uploads/${post.image}`} alt="" />
              <p className="post-body">{post.News_description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Firstnews;
