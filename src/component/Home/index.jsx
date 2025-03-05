import React from "react";
import './homepage.css'
const Homepage = ()=>{
    return(
        <>
        <section className="container homepage relative">
            <div className="row">
                <div className="col-md-6">
                    <div className="">
                    <div className="head_text">Hi, Im <span className="text-primary">Satyendra Kumar</span></div>
                    <div className="head_text_primary mt-3">A passionate full-stack developer specializing in creating beautiful, functional, and user-centered digital experiences.</div>

                    <div className="mt-4">
                        <div className="d-flex ">
                            <button type="btn" className="btn btn-primary px-3" >View My Work</button>
                            <button type="btn" className="btn btn-light mx-3">Contact Me</button>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="container">
            <div className="text-center svg-animation">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00227a" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                </svg>

            </div>
        </section>
        </>
    )
}
export default Homepage;