import React, {useState} from "react";
import "./getIntouch.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import emailjs from "@emailjs/browser";

const Getintouch = ()=>{

        const [name, setName] = useState("");
        const [subject, setSubject] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");

        const sendEmail = (e) => {
            e.preventDefault();
        
            const templateParam = {
                from_name: name,
                from_email: email,
                // subject: subject,
                message: message
            };
        
            const serviceId = "service_x4e3fy7";
            const templateId = "template_n99f0zi";
            const publicKey = "vfvplH58FBjPuDJtw";  // Ensure this matches your EmailJS public key
        
            emailjs.send(
                serviceId,      // Service ID
                templateId,     // Template ID
                templateParam,  // Template parameters (form data)
                publicKey       // Public Key (placed correctly)
            )
            .then((response) => {
                console.log("Email sent successfully!", response);
                alert("Message sent successfully!");
                setName('');
                setEmail('');
                setMessage('');
                // setSubject('');
            })
            .catch((error) => {
                console.log("Error sending email:", error);
                alert("Failed to send message. Check your EmailJS credentials.");
            });
        };


    return(
        <section className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="my-5">
                        <h3>Get in Touch</h3>
                        <hr />
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
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    required

                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* <div className="col-md-12 my-4">
                                <label>Subject</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e)=>setSubject(e.target.value)}
                                required
                            />
                            </div> */}

                            <div className="col-md-12">
                                <label htmlFor="">Message</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Message"
                                    cols="4"
                                    rows="4"
                                    value={message}
                                    onChange={(e)=>setMessage(e.target.value)}
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