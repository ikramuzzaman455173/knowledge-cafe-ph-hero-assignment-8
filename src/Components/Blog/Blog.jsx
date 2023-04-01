import React from 'react';

const Blog = () => {
  return (
    <>
      <div className="container my-4 blog-main-div">
        <h3 className='text-center fw-bold text-secondary py-4'>Blog Faq Sections</h3>
        <div className="row mx-auto">
          <div className="col-md-6 col-12 pb-4">
            {/* ====faq blog question 1===== */}
            <div className='blog-box shadow-sm'>
              <p>Props vs state?</p>
              <h4><span className="span">ans:</span> Props and state are two concepts in React that are used to manage and pass data between components. <span className='span'>Props </span>(short for properties) are read-only data that are passed from a parent component to a child component.React has another special built-in object called <span className="span">state</span>, which allows components to create and manage their own data.</h4>
            </div>
            {/* ====faq blog question 2===== */}
            <div className='blog-box shadow-sm'>
              <p>How does useState work?</p>
              <h4><span className="span">ans:</span> useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</h4>
            </div>
            {/* ====faq blog question 3===== */}
            <div className='blog-box shadow-sm'>
              <p>Purpose of useEffect other than fetching data?</p>
              <h4><span className="span">ans:</span> The useEffect in react js <strong>allows you to perform side effects in your components</strong>. The react <span className='span'>useEffect</span> examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</h4>
            </div>

            {/* ====faq blog question 4===== */}
            <div className='blog-box shadow-sm'>
              <p>How Does React work?</p>
              <h4><span className="span">ans:</span> React is a declarative, efficient, and flexible JavaScript library for building user interfaces. <span className="span">ReactJS</span> is an open-source, component-based front-end library responsible only for the view layer of the application. React is used to create modular user interfaces. It promotes the development of reusable UI components that display dynamic data.</h4>
            </div>



          </div>
          <div className="col-md-6 col-12 mt-4">
          <img src="https://storied-licorice-1eaf1f.netlify.app/img/faq.png" alt="faq image" className="img-fluid img-thumbnail"/>
          </div>
        </div>

      </div>
    </>
  );
};
export default Blog;