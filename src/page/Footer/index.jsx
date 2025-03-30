import './footer.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Footesection = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getfullYear = new Date();
  const year = getfullYear.getFullYear();
  return (
    <footer id="footer" className="">
      <div className="footer">
        <div className="container">
        <div className="row">
          <div className="col-md-6 footer-info footer-border padding-footer_col1">
            <div className="footerWidth">
              <a href="#" className="logo d-flex align-items-center">
                <span style={{textTransform:"uppercase", fontSize:"25px"}}>
                  <span>satyendra kumar</span>
                </span>
              </a>
              <p className="footer-infoPara">
                I am a frontend developer with expertise in HTML, CSS, JavaScript, ReactJS, Next.js, jQuery, Figma, and Photoshop. I am working on various projects.
              </p>
              
            </div>
          </div>
          <div className="col-md-3 footer-border padding-footer">
            <h4>Sitemap</h4>
            <ul className="browse">
              <li>
                <Link
                  to={"/about"}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to={"/skills"}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  Exprience
                </Link>
              </li>

              <li>
                <Link
                  to={"/skills"}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  to={"/getintouch"}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                > 
                  Contact us
                </Link>
              </li>

              
            </ul>
          </div>
          <div className="col-md-3 footer-border-bottom padding-footer">
            <h4>Community</h4>
            <ul className="browse">
              <li><a target="_blank" href="https://www.facebook.com/">Facebook </a></li>
              <li><a target='_blank' href='https://www.instagram.com/saty_endra/'>Instagram</a></li>
              <li><a target='_blank' href='https://www.linkedin.com/in/satyendra-kumar-2009b553/'>LinkedIn</a></li>
              <li><a target='_blank' href='https://github.com/satyarihad'>Github</a></li>
            </ul>
          </div>
        </div>

        <div className="row footerContainer_footerLast-">
          <div className="col-md-6 footer-info footer-border-right padding-footer_col1">
            <div className="footerWidth">
              <h4>Contact Us</h4>
              <p>Do you have any questions? Please contact. RZ-8, Sweet home, Jain Colony, Part III, Uttam Nagar West, Delhi - 110059.
              </p>
            </div>

            <div className="col-md-6 footer-info footer-border-right padding-footerLast_col1 d-xl-none d-lg-none d-md-none">
            <div className="footerWidth">
              <div className="email">
                <p>E-mail: <a href = "satyarihand@gmail.com">satyarihand@gmail.com</a></p>
                <p>Mobile: +91 9650964531 </p>
              </div>
            </div>
          </div>

          </div>
          <div className="col-md-6 padding-footer">
            <div className="privacypolicy">
              <Link
                to={"/privacyPolicy"}
                onClick={handleClick}
                style={{ cursor: "pointer", display:"none" }}
              >
                <p>Privacy Policy</p>
              </Link>

              <Link
                to={"/termsCondition"}
                onClick={handleClick}
                style={{ cursor: "pointer", display:"none" }}
              >
                <p>Terms of Use</p>
              </Link>
              <Link
                to={"/faq"}
                onClick={handleClick}
                style={{ cursor: "pointer", display:"none" }}
              >
                <p>FAQ</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="row footerContainer_last-">   
          <div className="col-md-6 footer-info footer-border-right padding-footerLast_col1 d-xl-block d-none d-lg-block d-md-block">
            <div className="footerWidth">
              <div className="email">
                <p>E-mail: <a href = "satyarihand@gmail.com">satyarihand@gmail.com</a></p>
                <p>Mobile: +91 9650964531</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 padding-footerLast">
            <div className="d-flex align-items-baseline justify-content-between">
            
            <div className="copyright">© {year} All Rights Reserved.</div>

            <div className="quilesIcon">
                <a href="https://www.quillaudits.com/leaderboard/al-mabrook-financials-inc" target="_blank"> <img src="./Image/AuditedSticker.svg" alt="" className="img-fluid"/></a>
            </div>
            </div>
            <div className="privacypolicy"></div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};
export default Footesection;
