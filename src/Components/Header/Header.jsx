import React from "react";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top my-4">
      <div className="container border border-1 py-2 rounded ">
        <a className="navbar-brand text-secondary logo" style={{ letterSpacing: '.5px', fontWeight: '500' }} href="#">Knowledge Cafe</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-capitalize" style={{ fontSize: '17px', fontWeight: '500' }}>

            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#services">services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#reviews">reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#contact">contact</a>
            </li>

          </ul>
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" style={{ width: '5%' }} className="border border-4 border-dark-subtle rounded-circle" alt="user image" />
        </div>
    </div>
    </nav>
  );
};

export default Header;