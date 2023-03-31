import React from 'react';

const Blog = () => {
  return (
    <>
      <div className="container my-4 blog-main-div">
        <h3 className='text-center fw-bold text-secondary py-4'>Blog Faq Sections</h3>
        <div clasNames="row my-5 rows-faq-blog">
          <div className="col-md-6 col-12 pb-4">
            <div className='blog-box shadow-sm'>
              <p>Props vs state?</p>
              <h4><span className="span">ans:</span> Props and state are two concepts in React that are used to manage and pass data between components. <span className='span'>Props </span>(short for properties) are read-only data that are passed from a parent component to a child component.React has another special built-in object called <sapn className="span">state</sapn>, which allows components to create and manage their own data.</h4>
            </div>

          </div>
          <div className="col-md-4 col-12 border p-2 rounded m-auto imgs shadow-sm">
            {/* <img src="https://storied-licorice-1eaf1f.netlify.app/img/faq.png" alt="faq image" className="img-fluid img-thumbnail"/> */}
            </div>


        </div>
      </div>
    </>
  );
};
export default Blog;