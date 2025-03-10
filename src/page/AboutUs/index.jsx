import React, { useState } from "react";
import "./about.css"

const Aboutus =()=>{
    
    return(
        <div className="about_us">
        <section className="container">
                <div className="row">
                    <div className="col-md-12">
                       
                       <div className="about_me_header">
                       <div className="about_me">About Me!</div>

                       <div className="row">
                        <div className="col-md-6">
                            <div className="userPic">
                                <img src="/images/userPic.png" alt="" className="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mt-5">
                            <div className="para-about">I'm a passionate developer with over 7+ years of experience building web applications. I specialize in JavaScript, React, and Node.js, creating responsive and accessible user interfaces.</div>

                            <div className="para-about my-3">My journey in tech began when I built my first website at 15. Since then, I've worked with startups and established companies to bring their digital visions to life.</div>
                            
                            <div className="para-about">When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.</div>
                            
                        </div>
                        <div className="projects_exp mt-3">
                            <div className="expreinces"><span>5+</span> <div>Years Experience</div></div>
                            <div className="projects mt-2"><span>5+</span> <div>Projects Completed</div></div>
                        </div>
                        </div>
                       </div>
                       </div>
                    </div>
                </div>
        </section>
        </ div>
    )
}
export default Aboutus;