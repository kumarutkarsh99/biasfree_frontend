import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (  
    <nav class="navbar navbar-expand-md navbar-dark px-3" aria-label="Fourth navbar example">
    <div class="container-fluid">
      <Link to="/" className="navbar-brand">BiasFree</Link> 
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item mx-1">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item mx-1">
            <Link class="nav-link active" aria-current="page" to="/upload">Upload</Link>
          </li>
          <li class="nav-item mx-1">
            <Link class="nav-link" to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  //   <nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
  //   <div class="container-fluid">
  //     <Link to="/" className="navbar-brand">BiasFree</Link>
  //     <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
  //       <span class="navbar-toggler-icon"></span>
  //     </button>

  //     <div class="navbar-collapse collapse" id="navbarsExample04" style="">
  //       <ul class="navbar-nav me-auto mb-2 mb-md-0">
  //         <li class="nav-item">
  //           <a class="nav-link active" aria-current="page" href="#">Home</a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link" href="#">Link</a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  //         </li>
  //         <li class="nav-item dropdown">
  //           <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
  //           <ul class="dropdown-menu">
  //             <li><a class="dropdown-item" href="#">Action</a></li>
  //             <li><a class="dropdown-item" href="#">Another action</a></li>
  //             <li><a class="dropdown-item" href="#">Something else here</a></li>
  //           </ul>
  //         </li>
  //       </ul>
  //       <form role="search">
  //         <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
  //       </form>
  //     </div>
  //   </div>
  // </nav>
    
  )
}

export default Navbar