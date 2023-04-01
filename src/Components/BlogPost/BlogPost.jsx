import React from "react";
import { BiBookmark } from 'react-icons/bi';

const BlogPost = ({ blog,handleBlogReadTime,handleBookmark }) => {
  const {author_name,title,images,tags,publish_date,read_time}=blog
  return (
    <div className="border-2  w-100 col-md-6 mb-5 Blog-Post">
      <div className="w-full">
        <img style={{width:'99%',border:'1px solid #6047EC1A',padding:'5px',borderRadius:'5px'}} className="h-25 blog-cover-image" src={images?images.blog_cover:''} alt="blog images" />
      </div>
      <div className="d-flex justify-content-between mt-5 align-items-center user-content">
        {/* ====user parts===== */}
        <div className="d-flex">
          <img src={images?images.author_image:''} style={{ width: '3rem' }} className="border border-4 border-dark-subtle rounded-circle" alt="user image" />
          <div className="d-flex flex-column ms-4">
            <h6 className="author-name fs-5 fw-semibold text-color">{author_name?author_name:''}</h6>
            <p className="date fs-5">{publish_date?publish_date:''}</p>
          </div>
        </div>
        {/* ====time and icons part===== */}

        <div className="d-flex gap-4 align-items-center date-icon">
          <p className="text-color fw-semibold time">0<span>{read_time?read_time:''}</span> min read</p>
          <button onClick={()=>handleBookmark(blog)} className="fs-5 icon"><BiBookmark/></button>
        </div>
      </div>
      <p className="h4 mt-2 text-color title">{title?title:'Title Not Found !!!'}</p>
      <div className="d-flex gap-2">
        {tags?.map((tag,index)=><p className="text-color" key={index}><span className="fw-semibold text-lowercase">#{tag}</span></p>)}
        </div>
      <a href="#" onClick={() => handleBlogReadTime(read_time)}>Mark as read</a>
      <hr className="w-100"/>
    </div>

  );
};

export default BlogPost;