import React, { useState } from "react";
import "./about.css"

const Aboutus =()=>{
    const [reactJS, setReactJS] = useState(85); // Initial value
    const [nextJS, setNextJS] = useState(80); // Initial value
    const [expressJS, setExpressJS] = useState(70); // Initial value
    const [nodeJS, setNodeJS] = useState(69); // Initial value
    const [js, setJs] = useState(80); // Initial value
    const [html, setHtml] = useState(95); // Initial value
    const [css, setCss] = useState(95); // Initial value

    return(
        <div className="about_us">
        <section className="container">
                <div className="row">
                    <div className="col-md-12">
                       
                       <div className="about_me_header">
                       <div className="about_me" style={{textTransform:"uppercase"}}>A<span style={{fontSize:"22px"}}>bout</span> U<span style={{fontSize:"22px"}}>s</span></div>
                        <hr />
                       <div className="row">
                        <div className="col-md-6">

                            <div className="userPic">
                                <img src="/images/1706411188026.jpg" alt="" className="" />
                                <div className="mx-3 mt-3 userDetails-skill">
                                <div>Name: Satyendra Kumar</div>
                                <div>Jobe Role: UI Design and Development</div>
                                <div>Expreince: 10 Years exprience</div>
                                <div>Address: Delhi</div>
                            </div>
                            </div>

                            <div className="mt-3 skill_technology"><h4>S<span style={{fontSize:"20px"}}>kills</span> & T<span style={{fontSize:"20px"}}>echnologies</span></h4></div>
                            <hr />
                            <div>
                            <label>ReactJS: {reactJS}%</label>
                            <br/>
                                <meter min="0" max="100" value={reactJS}
                                    style={{ width: "100%", height: "20px",  }}
                                ></meter>
                            </div>

                            <div>
                            <label>NextJS: {nextJS}%</label>
                            <br/>
                                <meter className="meter-fill" min="0" max="100" value={nextJS}
                                    style={{ width: "100%", height: "20px"  }}
                                ></meter>
                            </div>

                            <div>
                            <label>ExpressJS: {expressJS}%</label>
                            <br/>
                                <meter min="0" max="100" value={expressJS}
                                    style={{ width: "100%", height: "20px",  }}
                                ></meter>
                            </div>

                            <div>
                            <label>NodeJS: {nodeJS}%</label>
                            <br/>
                                <meter min="0" max="100" value={nodeJS}
                                    style={{ width: "100%", height: "20px",  }}
                                ></meter>
                            </div>

                            <div>
                            <label>JavaScript: {js}%</label>
                            <br/>
                                <meter min="0" max="100" value={js}
                                    style={{ width: "100%", height: "20px",  }}
                                ></meter>
                            </div>

                            <div>
                            <label>HTML5: {html}%</label>
                            <br/>
                                <meter min="0" max="100" value={html}
                                    style={{ width: "100%", height: "20px",  }}
                                ></meter>
                            </div>

                            <div>
                            <label>CSS3/Bootsrap/Tailwind: {css}%</label>
                            <br/>
                                <meter min="0" max="100" value={css}
                                    style={{ width: "100%", height: "20px",  }}
                                ></meter>
                            </div>


                        </div>
                        <div className="col-md-6">
                            <div className="mt-0">
                            <div className="para-about">I'm a passionate developer with over 10 years of experience building web applications and website. I specialize in JavaScript, ReactJS, Nextjs, HTML5, CSS3, Bootstrap, and tailwind creating responsive and accessible user interfaces.</div>

                            <div className="para-about my-3"></div>
                            
                            <div className="para-about">When I'm not coding, you can find me, reading sci-fi novels, or experimenting with new recipes in the kitchen.</div>

                            <div className="about_profile mt-5">
                                <div className="profile"><span className="sub_profile">Profile:</span> UI Developer and Designer</div>
                                <div className="profile"><span className="sub_profile">Domain:</span> Blockchain, Ecommerce, Tickting</div>
                                <div className="profile"><span className="sub_profile">Education:</span> Matser of Application</div>
                                <div className="profile"><span className="sub_profile">Language:</span> English, Hindi</div>
                                <div className="profile"><span className="sub_profile">Marital Status:</span> Married</div>
                                <div className="profile"><span className="sub_profile">Other Skills:</span> 
                                Git, Github, Asana, Jira, Google Analytics & SEO</div>
                                <div className="profile"><span className="sub_profile"> Interest:</span> Traveling, Travel Photography, Teaching</div>
                            </div>
                            
                        </div>
                        <div className="projects_exp mt-3">
                            <div className="expreinces"><span>10</span> <div>Years Experience</div></div>
                            <div className="projects mt-2"><span>10+</span> <div>Projects Completed</div></div>
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