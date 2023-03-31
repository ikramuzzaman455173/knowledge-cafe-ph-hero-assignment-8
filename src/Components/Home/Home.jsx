import React from "react";
import BlogPost from "../BlogPost/BlogPost";

const Home = () => {
  return (
    <div>
      {/* <div className="row gap-4"> */}
      <BlogPost />
      <BlogPost/>
      {/* </div> */}
    </div>
  );
};

export default Home;