import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/Navfooter.scss";
import "../../Styles/News.scss";

function Firstnews() {
  const [firstnews, setFirstNews] = useState([]);
  const [posts, setPosts] = useState([]);
  const [thirdposts, setthirdPosts] = useState([]);
  function containsUndefined(arr) {
    return arr.includes(undefined);
  }

  useEffect(() => {
    fetch("/api/getall")
      .then((response) => response.json())
      .then((data) => {
        console.log([data[0], data[1]]);
        setPosts([data[0], data[1]]);
        if (containsUndefined([data[2], data[3], data[4]])) {
          return;
        } else {
          setthirdPosts([data[2], data[3], data[4]]);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch("/api/getCategory/Business")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFirstNews(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="firstnews">
      <div className="firstgrid">
        {firstnews.map((post, id) => {
          return (
            <div className="post-card" key={id}>
              <h5>{post.News_category}</h5>
              <NavLink to={`${post._id}`}>
                <h1 className="news_title">{post.News_title}</h1>
              </NavLink>
            </div>
          );
        })}
      </div>
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
      <div className="thirdgrid">
        {thirdposts.map((post, id) => {
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
