import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import me from '../assets/351019277_1528724984325682_6447338810638787455_n.jpg';
import github from '../assets/icons/icons8-github-40.png';
import linkedIn from '../assets/icons/icons8-linkedin-40.png';
import whatsapp from '../assets/icons/icons8-whatsapp-logo-40.png';
import '../styles/home.css';

function Home() {
  const introRef = useRef(null);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (introRef.current) observer.observe(introRef.current);
    if (aboutMeRef.current) observer.observe(aboutMeRef.current);

    return () => {
      if (introRef.current) observer.unobserve(introRef.current);
      if (aboutMeRef.current) observer.unobserve(aboutMeRef.current);
    };
  }, []);

  return (
    <div className='home'>
      {/* Intro Section */}
      <div ref={introRef} className="intro">
        <div>
          <p>
            Hello 👋 I'm Mixo Shibambo — a curious and passionate designer and developer from South Africa, turning ideas into interactive digital experiences.
          </p>
          <div className="social-links">
            <Link to={'https://github.com/MISHOW2'}>
              <img src={github} alt="GitHub" />
            </Link>
            <Link>
              <img src={linkedIn} alt="LinkedIn" />
            </Link>
            <Link to={'https://wa.me/27736957847'}>
              <img src={whatsapp} alt="WhatsApp" />
            </Link>
          </div>
        </div>
        <img src={me} alt="Mixo Shibambo" className='myself' />
      </div>

      {/* About Me Section */}
      <div ref={aboutMeRef} className="about-me">
        <div>
        <p>Get To Know Me</p>
        <h3>About Me</h3>
        </div>

        <div className="about-info">
          <div className="about-containers">
            <div className="left-box">
              <img src="" alt="" />
              <p className='about-heading'>Experience</p>
              <p>1+ years</p>
              <p>Frontend Developer</p>
            </div>
            <div className="left-box">
              <img src="" alt="" />
              <p className='about-heading'>Education</p>
              <p>Dip In Information Technology</p>
            </div>
          </div>
          <p className='about-description'>I’m a passionate front-end developer with a strong foundation in HTML, CSS, JavaScript, and React.js. I specialize in building responsive, user-friendly web applications with clean and efficient code. My journey in web development has been driven by curiosity and a love for creating seamless digital experiences.</p>
        </div>

        
      </div>

      <div className="explore">
        <div>
        <p>Explore My</p>
        <h3>Experience</h3>
        </div>
      </div>

    </div>
  );
}

export default Home;