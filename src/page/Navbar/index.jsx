import React from "react";

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
                                <li>About US</li>
                                <li>Contact Us</li>
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