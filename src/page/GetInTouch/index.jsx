import React, {useState} from "react";
import "./getIntouch.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const Getintouch = ()=>{

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
      const [status, setStatus] = useState("")

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      
        const isFormValid = formData.name && formData.email && formData.message;

    return(
        <section className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="my-5 user_exprience">
                        <h3 style={{textTransform:"uppercase"}}>G<span style={{fontSize:"23px"}}>et</span> i<span style={{fontSize:"23px"}}>n</span> T<span style={{fontSize:"23px"}}>ouch</span></h3>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            
                            <div className="mb-3">
                                <h4>Send Me a Message</h4>
                                <h6>Fill out the form below and I'll get back to you as soon as possible.</h6>
                            </div>
                            
                            
                            <form action="https://formsubmit.co/satyarihand@gmail.com" method="POST">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    onChange={handleChange}
                                />
                                <input
                                    className="form-control my-3"
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    onChange={handleChange}
                                />
                                
                                <textarea
                                    className="form-control"
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                    onChange={handleChange}
                                    cols="12"
                                    rows="4"
                                ></textarea>

                                <div className="d-grid">
                                <button disabled={!isFormValid} type="submit" className="btn btn-primary wd-100 mt-2">Send <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                    </svg> </button>
                                </div>
                                </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <h4>Contact Information</h4>
                                <h6>Feel free to reach out through any of these channels.</h6>
                            </div>

                            <div className="getintouch mt-4">
                                <div>
                                <i className="bi bi-envelope" style={{color:"#0d6efd", fontWeight:"bold"}}></i>
                                </div>
                                <div className="mx-2 emailpart">
                                <h5>Email</h5>
                                <p> <a href="mailto:satyarihand@gmail.com">satyarihand@gmail.com</a></p>
                                </div>
                            </div>

                            <div className="getintouch mt-4">
                                <div>
                                <i className="bi bi-telephone" style={{color:"#0d6efd", fontWeight:"bold"}}></i>
                                </div>
                                <div className="mx-2 emailpart">
                                <h5>Phone</h5>
                                <p>+91 9650964531</p>
                                </div>
                            </div>

                            <div className="getintouch mt-4">
                                <div>
                                <i className="bi bi-geo-alt" style={{color:"#0d6efd", fontWeight:"bold"}}></i>
                                </div>
                                <div className="mx-2 emailpart">
                                <h5>Location</h5>
                                <p>Delhi - 110059</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Getintouch;