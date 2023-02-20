import React from 'react'
import { useState, useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import ME1 from '../../assets/images/me1_nobgcopy.png'
import HeaderSocials from './HeaderSocials'
import headerImg from '../../assets/images/header-img.png'
import rainbow from '../../assets/images/header-rainbow.png'


const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Fullstack Developer", "Web Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random()*100);    
  const period = 2000;
  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => {clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

    setText(updatedText);

    // when deleeting the pace is different
    if (isDeleting) {
      setDelta(prevDelta => prevDelta/2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1)
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1)
    }

  }


  return (
    <header>
      {/* <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Zumin Yu</h1>
        <h5 className="text-light">
          Fullstack Developer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME1} alt='me' />
        </div>

        <a href='#contact' className='scroll-down'>Scroll Down</a>
      </div> */}

      {/* ======================= test for animation ================================= */}
      <div className="container header_container">
        <div className="header_text">
          <span className='tagline'>Welcome to Zumin Yu's portfolio</span>
          <h1>{`Hi I'm a `}<span className='wrap'>{text}</span></h1>
          <p>I'm a highly motivated and eager Full- Stack Developer with a strong foundation in design. Looking for an opportunity to learn and grow in a dynamic, innovative environment.</p>
          <CTA />
        </div>

        <div className="header_image">
          <img className='astronaut' src={headerImg} alt="Header img" />
        </div>
      </div>
  
    </header>
  )
}

export default Header