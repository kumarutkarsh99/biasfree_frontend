import React from 'react';

const About = () => {
  return (
    <div className="about-container pb-4">

        <div className='about-text mx-4 my-3'>
            <p className='text-gradient-1 pt-3'>At CodeManiacs</p>
            <p className='text-gradient-2'>We Innovate Together</p>
            <p className='description-about'>
            CodeManiacs is a forward-thinking collective of skilled developers, machine learning specialists, and visionary problem solvers dedicated to crafting state-of-the-art technological solutions. We thrive on innovation, collaboration, and the relentless pursuit of excellence, continuously pushing the boundaries of what technology can achieve. Our team is driven by a shared passion for creating software that not only meets current industry standards but also anticipates the future needs of businesses and users alike. With expertise spanning across web development, artificial intelligence, and scalable system architectures, we design and develop solutions that are efficient, intuitive, and adaptable. From building seamless web applications and intelligent AI-driven systems to engineering high-performance platforms, our work is guided by a commitment to quality, performance, and user-centric design. We believe that great technology is not just about writing code—it’s about solving real-world problems and creating meaningful experiences. We are not just building software; we are shaping the future of technology, one solution at a time.
            </p>
        </div>

        <div className="title mb-4">
            <h2>Team CodeFathers</h2>
        </div>

        <div className="cards-container">

        <div className="card" onClick={() => window.open("https://www.linkedin.com/in/kumar-utkarsh-1a601330b/", "_blank")}>
          <div className="thumbnail">
            <img src="/pic1.jpg" className="thumbnail-img" />
          </div>
          <div className="card-body">
            <h4>Kumar Utkarsh</h4>
            <h6>Full-stack Developer</h6>
          </div>
        </div>

        <div className="card" onClick={() => window.open("https://www.linkedin.com/in/soham-jain-241579245/")}>
          <div className="thumbnail">
            <img src="/pic2.jpg" className="thumbnail-img" />
          </div>
          <div className="card-body">
                <h4>Soham Jain</h4>
                <h6>Machine Learning Engineer</h6>
          </div>
        </div>

        <div className="card" onClick={() => window.open("https://www.linkedin.com/in/soham-jain-241579245/")}>
          <div className="thumbnail">
            <img src="/pic3.png" className="thumbnail-img" />
          </div>
          <div className="card-body">
                <h4>Harshil Singh</h4>
                <h6>Machine Learning Engineer</h6>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
