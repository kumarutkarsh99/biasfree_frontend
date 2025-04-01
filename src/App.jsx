import React from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import UploadForm from './UploadForm.jsx';
import Footer from './Footer.jsx';
import Barchart from './Barchart.jsx';
import About from './About.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<><Navbar/> <UploadForm/> <Footer/></>} />
        <Route path="/results" element={<><Navbar/> <Barchart/> <Footer/></>} />
        <Route path="/about" element={<><Navbar/> <About/> <Footer/></>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
