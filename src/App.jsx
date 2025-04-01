import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import UploadForm from './UploadForm.jsx';
import Footer from './Footer.jsx';
import Barchart from './Barchart.jsx';
import About from './About.jsx';


const pageVariants = {
  initial: { opacity: 0, scale: 0.95, y: 10 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    scale: 1.02, 
    y: -10, 
    transition: { duration: 0.5, ease: "easeInOut" } 
  }
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        style={{
          minHeight: "100vh",
          backgroundColor: "black", 
          color: "white",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "absolute",
          overflowX: "hidden",
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<><Navbar /><UploadForm /><Footer /></>} />
          <Route path="/results" element={<><Navbar /><Barchart /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: "black", minHeight: "100vh", overflowX: "hidden" }}>
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;
