import { useState, useEffect } from "react";
import './homepage.css'
import Aboutus from "../../page/AboutUs";
import Projectjs from "../../page/Projectjs";
import Skills from "../../page/Skills";
import Getintouch from "../../page/GetInTouch";


const Homepage = ()=>{

  const texts = ["UI Designer", "UI Developer"];
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const interval = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 200); // Adjust speed

      return () => clearTimeout(interval);
    } else {
      // Wait before switching to the next text
      setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length); // Switch to the next text
      }, 1000);
    }
  }, [charIndex, textIndex]);


  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { top, bottom, left, right } = e.currentTarget.getBoundingClientRect();

    const middleX = (right - left) / 2;
    const middleY = (bottom - top) / 2;

    const offsetX = ((e.clientX - left - middleX) / middleX) * 5;
    const offsetY = ((middleY - (e.clientY - top)) / middleY) * 5;

    setTilt({ x: offsetX, y: offsetY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

    return(
        <>
        <section className="container homepage">
            <div className="row">
                <div className="col-md-6">

                    <div className="" style={{marginTop:"100px"}}>
                    <div className="head_text">Hi, Im <span className="text-primary">Satyendra Kumar </span>
                    <span class="wave">👋</span>
                    </div>
                    
                    <div className="head_text my-4"><h3>Experties: {displayText}</h3></div>

                    <div className="head_text_primary mt-0">A passionate UI Designer and developer specializing in creating beautiful, functional, and user-centered digital experiences.</div>

                    <div className="mt-4">
                        <div className="d-flex ">
                            <button type="btn" className="btn btn-primary px-3" >View My Work</button>
                            <button type="btn" className="btn btn-light mx-3">Contact Me</button>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="userProfile" style={{zIndex:"-999"}}>

                    <div
                        className="tilt"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale3d(1, 1, 1)`,
                            transition: "transform 0.1s ease-out",
                        }}
                        >
                         <img src="./images/userPic.png" alt="" className="img-fluid"/>
                        </div>

                   
                    
                    </div>
                </div>
            </div>
        </section>

        <section className="container">
            <div className="text-center svg-animation">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00227a" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                </svg>
            </div>
        </section>
        <Aboutus />
        <Skills /> 
        {/* <Projectjs /> */}
         
        <Getintouch />
        </>
    )
}
export default Homepage;