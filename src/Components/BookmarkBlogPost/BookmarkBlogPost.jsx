import { useEffect, useState } from "react";

const BookmarkBlogPost = ({ readTime,bookmarkedBlogs,bookmarkedCount }) => {
  const [time, setTime] = useState(readTime)

  useEffect(() => {
    const getReadTimeFromStorage = localStorage.getItem("readTime")
    setTime(getReadTimeFromStorage)
    },[readTime])

  return (
    <div className="sticky">
    <div className='border text-center pt-4 fw-semibold spendTime'>
      <p>Spent time on read : <span>{time?time:0}</span> min</p>
    </div>
      <div className="bookmark border-0 rounded mt-5 py-4">
        <div className="h6 ms-2 fw-light text-color">Bookmarked Blogs : <span className="span">{bookmarkedCount}</span></div>
        {bookmarkedBlogs?.map(blogs => {
          return(<div key={blogs.id} className="bookmarks fw-semibold py-2">
            <p className="h6">{bookmarkedCount}. {blogs.title}</p>
        </div>)
        })}
      </div>
    </div>
  );
};

export default BookmarkBlogPost;