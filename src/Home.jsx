import React from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex box-home vh-100 bg-black">
      <div className="d-flex flex-column home-box align-items-center justify-content-center flex-grow-1 p-5">
        <div className="welcome">
          <h1 className="fw-bold display-4">BiasFree</h1>
          <p className="text-secondary fs-5">
            Building fair AI, one detection at a time.
          </p>
          <p className="text-light fs-6">
            AI models are powerful, but biases can creep in unnoticed. We help identify and mitigate gender biases, 
            ensuring fair and transparent AI decision-making.
          </p>
          <p className="fst-italic">
            "Fairness in AI isn't optional—it's essential."
          </p>
          <Link to="/upload" className="btn btn-primary get-started rounded mt-3 px-4 py-2">
            Get Started!
          </Link>
          <p className="mt-4 text-secondary small">
            Join us in making AI more ethical and inclusive.
          </p>
        </div>
      </div>
      <div className="moving d-none d-lg-flex align-items-center justify-content-center flex-shrink-0">
      <Spline 
        scene="https://prod.spline.design/NOFp02Wa04ScxXsJ/scene.splinecode" 
        style={{ width: '100%', height: 'auto', aspectRatio: '13/16'}}
      />
      </div>
    </div>
  );  
};

export default Home;
