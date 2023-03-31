import React from "react";
import { BiBookmark } from 'react-icons/bi';

const BlogPost = () => {
  return (
    <div className="card w-100 m-auto col-md-6 mb-4">
      <div className="w-full m-auto">
        <img style={{width:'90%'}} className="h-25" src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/08872b0ad95f2fd2c1f2ce6297afb8ef" alt="" />
      </div>
      <div className="d-flex justify-content-between mt-5 align-items-center user-content">
        {/* ====user parts===== */}
        <div className="d-flex">
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" style={{ width: '3rem' }} className="border border-4 border-dark-subtle rounded-circle" alt="user image" />
          <div className="d-flex flex-column ms-4">
            <h6 className="user-name ">john doe</h6>
            <p className="date fs-5">Mar 14 (4 Days ago)</p>
          </div>
        </div>
        {/* ====time and icons part===== */}

        <div className="d-flex gap-4 align-items-center date-icon">
          <p className="fs-5 fw-semibold">0<span>5</span> min read</p>
          <p className="fs-5 icon"><BiBookmark/></p>
        </div>
      </div>
      <p className="h4 mt-2">How to get your first job as a self-taught programmer</p>
      <div className="d-flex gap-2">
        <p># <span className="fw-semibold">beginners</span></p>
        <p># <span className="fw-semibold">beginners</span></p>
        </div>
        <a href="#">Mark as read</a>
    </div>

  );
};

export default BlogPost;
