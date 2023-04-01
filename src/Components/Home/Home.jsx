import React, { useEffect, useState } from 'react';
import BlogPost from "../BlogPost/BlogPost";
import BookmarkBlogPost from "../BookmarkBlogPost/BookmarkBlogPost";
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const [blogPost, setBlogPost] = useState([])
  const [readTime, setreadTime] = useState(0);
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const [bookmarkedCount, setBookmarkedCount] = useState(0);

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

  const handleBookmark = (blog) => {
    const isAlreadyBookmarked = bookmarkedBlogs.find((b) => b.id === blog.id);
    if (isAlreadyBookmarked) {
      toast("You Have Already Bookmarked This Blog !!!")
      // alert("You Have Already Bookmarked This Blog");
      return;
    }
    const newBookmarkedBlogs = [...bookmarkedBlogs, blog];
    setBookmarkedBlogs(newBookmarkedBlogs);
    setBookmarkedCount(newBookmarkedBlogs.length);
    console.log(`blog:`,blog);

  };

  useEffect(() => {
    fetch("Data.json").then(response => response.json()).then(data => setBlogPost(data)).catch(error => console.log(`404 page not found ${error}`))
  }, [])


  return (
    <>
      <div className="Home row">
        <div className="col-md-9 mb-4">
          <div>
            {blogPost?.map(blog => <BlogPost handleBookmark={handleBookmark} handleBlogReadTime={handleBlogReadTime} key={blog.id} blog={blog} />)}
          </div>
        </div>
        <div className="col-md-3">
          <BookmarkBlogPost bookmarkedBlogs={bookmarkedBlogs} bookmarkedCount={bookmarkedCount} readTime={readTime}></BookmarkBlogPost>
        </div>

      </div>
    </>
  );
};

export default Home;