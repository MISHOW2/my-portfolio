import React from 'react'
import { Link } from 'react-router-dom'
import me from '../assets/351019277_1528724984325682_6447338810638787455_n.jpg'
import github from '../assets/icons/icons8-github-40.png'
import linkedIn from '../assets/icons/icons8-linkedin-40.png'
import whatsapp from '../assets/icons/icons8-whatsapp-logo-40.png'
import '../styles/home.css'
function Home() {
  return (
    <div>
      <div className="intro">
          <div>
          <p>Hello 👋 I'm Mixo Shibambo — a curious and passionate designer and developer from South Africa, turning ideas into interactive digital experiences.</p>
          <div className="social-links">
             <Link to={'https://github.com/MISHOW2'}><img src={github} alt="" /> </Link>
            <Link>  <img src={linkedIn} alt="" /></Link>
          <Link to={'https://wa.me/27736957847'}>   <img src={whatsapp} alt="" /></Link>
          </div>
          </div>
        <img src={me} alt="" className='myself'/>

      </div>
    </div>
  )
}

export default Home
