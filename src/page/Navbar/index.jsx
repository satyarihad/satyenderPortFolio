import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "./navbar.css";

const Navbar =({ darkMode, setDarkMode })=>{

    const [isScrolled, setIsScrolled] = useState(false);
    

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 200){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll)
        })

    return(
       <div className={` ${darkMode ? 'dark-navbar' : ''} nav_bar-header ${isScrolled ? "fixed top-0 w-full shadow-lg bg-white z-50" : "relative"}`}>
        <section className="container py-2">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex align-items-center justify-content-between">
                
                <div className="logo_icon">
                  <Link href="/"> <img src="/images/logo.png" alt="Logo" /> </Link>
                </div>

                <div className="d-flex">
                  <ul className="menu_bar d-flex list-unstyled gap-4 m-0">
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/product">Product</Link></li>
                    <li>Login</li>
                    
                    <li>
                        <div class="form-check form-switch">
                            <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            checked={darkMode}
                            onChange={()=>setDarkMode(!darkMode)}
                            />

                    </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}
export default Navbar;