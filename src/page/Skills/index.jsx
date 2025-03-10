import React from "react";
import "./skills.css"

const Skills = ()=>{
    return(
        <section className="container">
            <div className="row">

                <div className="my-4 text-center">
                    <h3>Skills & Technologies</h3>
                </div>
                <div className="col-md-4">
                    <div>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Frontend</h3>
                            <hr/>
                            <div className="card-text frontEndTech">
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>JavaScript</div>
                                <div>TypeScript</div>
                                <div>React</div>
                                <div>Next.js</div>
                                <div>Vue.js</div>
                                <div>Tailwind CSS</div>
                                <div>Styled Components</div>
                                <div>Redux</div>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Backend</h3>
                            <hr/>
                            <div className="card-text frontEndTech">
                            <div>Node.js</div>
                            <div>Express</div>
                            <div>Python</div>
                            <div>Django</div>
                            <div>PHP</div>
                            <div>Laravel</div>
                            <div>GraphQL</div>
                            <div>REST API</div>
                            <div>MongoDB</div>
                            <div>PostgreSQL</div>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Tools & Others</h3>
                            <hr/>
                            <div className="card-text frontEndTech">
                                <div>Git</div>
                                <div>GitHub</div>
                                <div>Docker</div>
                                <div>AWS</div>
                                <div>Firebase</div>
                                <div>Vercel</div>
                                <div>Figma</div>
                                <div>Jest</div>
                                <div>Cypress</div>
                                <div>CI/CD</div>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills