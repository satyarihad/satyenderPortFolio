import React from "react";
import { Link } from "react-router";
const Navbar =()=>{
    return(
        <>
        <section className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="logo_icon">
                            <img src="../images/logo.png" alt="" />
                        </div>
                        <div className="d-flex">
                            <ul className="menu_bar">
                                <li><Link to="/about"> About US</Link></li>
                                <li> <Link to="/contact" >Contact Us</Link></li>
                                <li>Product</li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
        </>
    )
}
export default Navbar;