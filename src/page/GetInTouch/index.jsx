import React, {useState} from "react";
import "./getIntouch.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import emailjs from "@emailjs/browser";

const Getintouch = ()=>{

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",   
        message: "",
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.send(
            "service_i3jbjzb", // Replace with your EmailJS service ID
            "template_h38jep1", // Replace with your EmailJS template ID
            formData,
            "vfvplH58FBjPuDJtw" // Replace with your EmailJS public key
          )
          .then(
            (response) => {
              console.log("Email sent successfully!", response);
              alert("Message sent successfully!");
              setFormData({ name: "", email: "", subject: "", message: "" }); // Clear the form
            },
            (error) => {
              console.log("Error sending email:", error);
              alert("Failed to send message. Try again later.");
            }
          );
      };

    return(
        <section className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center my-5">
                        <h3>Get in Touch</h3>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            
                            <div>
                                <h4>Send Me a Message</h4>
                                <h6>Fill out the form below and I'll get back to you as soon as possible.</h6>
                            </div>
                            <form onSubmit={sendEmail}>
                            <div className="row mt-3 sendmsg">
                            <div className="col-md-6">
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required

                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"                
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required

                                />
                            </div>

                            <div className="col-md-12 my-4">
                                <label>Subject</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                
                            />
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="">Message</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Message"
                                    cols="4"
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    />
                            </div>

                            <div className="col-md-12 mt-4 sendMessage">
                                <button type="btn" className="btn btn-primary"> <i className="bi bi-send"></i> Send Message</button>
                            </div>

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
                                <p>your.email@example.com</p>
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