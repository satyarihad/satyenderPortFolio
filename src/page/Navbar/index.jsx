import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router";
import "./navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./sidebar";

const Navbar =({ darkMode, setDarkMode })=>{

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const sidebarRef = useRef(null);
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    }

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


        useEffect(() => {
          const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
              setIsOpen(false);
            }
          };
      
          if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
          } else {
            document.removeEventListener("mousedown", handleClickOutside);
          }
      
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [isOpen]);

        
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
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/skills">Expreince</Link></li>
                    <li><Link to="/skills">Project</Link></li>
                    <li><Link to="/getintouch">Contact Us</Link></li>
                    
                    <li>
                        <div className="form-check form-switch">
                          <label htmlFor="flexSwitchCheckChecked">Theme</label>
                            <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            checked={darkMode}
                            onChange={()=>setDarkMode(!darkMode)}
                            />

                    </div>
                    </li>
                  </ul>
                  <div className="mobile_version" onClick={toggleSidebar}> <i class="bi bi-list"></i>
                  
                  <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
                    <img src="/images/logo.png" alt="" className="img-fluid" />
                      <button className="close-btn" onClick={toggleSidebar}>&times;</button>
                      <ul>
                      <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/skills">Expreince</Link></li>
                    <li><Link to="/skills">Project</Link></li>
                    <li><Link to="/getintouch">Contact Us</Link></li>
                      </ul>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}
export default Navbar;