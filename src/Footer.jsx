import React from "react";

const Footer = () => {
  return (
    <footer className="footer d-flex justify-content-between align-items-center px-0 m-0">
      <div className="container footer-box d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex align-items-center">
          <p className="footer-text mb-0">© 2025 CodeFathers</p>
        </div>
        <ul className="d-flex list-unstyled mb-0 ms-auto">
          <li className="ms-3">
            <a href="https://www.linkedin.com/in/kumar-utkarsh-1a601330b/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin fs-5 icon-purple"></i>
            </a>
          </li> 
          <li className="ms-3">
            <a href="https://github.com/kumarutkarsh99" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github fs-5 icon-purple"></i>
            </a>
          </li>         
          <li className="ms-3">
            <a href="https://www.instagram.com/kumarutkarsh99/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram fs-5 icon-purple"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
