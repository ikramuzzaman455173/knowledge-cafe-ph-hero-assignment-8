import React, { useEffect, useState } from "react";
import BlogPost from "../BlogPost/BlogPost";

const Home = () => {
  {/* ====useState Decleares===== */ }
  const [blogPost, setBlogPost] = useState([])
  {/* ====any function decleares===== */}

  {/* ====useEffect decleares===== */ }
  useEffect(() => {
      fetch("data.json").then(response => response.json()).then(data =>setBlogPost(data)).catch(error=>console.log(`404 page not found ${error}`))
    },[])
  return (
    <div>
      {blogPost?.map(blog => <BlogPost key={blog.id} blog={blog} />)}
    </div>
  );
};

export default Home;