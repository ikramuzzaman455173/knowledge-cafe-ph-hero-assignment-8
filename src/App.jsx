import { useState } from "react";
import "../src/style.css";
import BookmarkBlogPost from "./Components/BookmarkBlogPost/BookmarkBlogPost";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
function App() {
  const [readTime, setreadTime] = useState(0);

  const handleBlogReadTime = (time) => {
    const previousBlogReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousBlogReadTime) {
      const sum = previousBlogReadTime + time;
      localStorage.setItem("readTime", sum);
      setreadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setreadTime(time);
    }
  };
  console.log(handleBlogReadTime,'handleBlogReadTime');


  return (
    <div>
        <Header></Header>
        <div className="main row">
        <div className="home-container col-md-9 mb-4">
          <Home handleBlogReadTime={handleBlogReadTime}></Home>
        </div>
        <div className="sideCart col-md-3   ">
          <BookmarkBlogPost readTime={readTime}></BookmarkBlogPost>
        </div>
      </div>
    </div>
  );
}

export default App;
