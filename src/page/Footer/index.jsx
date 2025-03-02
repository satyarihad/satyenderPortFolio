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

  return (
    <footer id="footer" className="">
      <div className="footer">
        <div className="container">
        <div className="row">
          <div className="col-md-6 footer-info footer-border padding-footer_col1">
            <div className="footerWidth">
              <a href="#" className="logo d-flex align-items-center">
                <span>
                  <img src="../images/footerLogo.png" alt="" />
                </span>
              </a>
              <p className="footer-infoPara">
                I am a frontend developer with expertise in HTML, CSS, JavaScript, ReactJS, Next.js, jQuery, Figma, and Photoshop. I am working on various projects, including:
              </p>
              <p className="footer-infoPara last">
                <ul style={{listStyleType:"none"}}>
                    <li><strong>Next.js development,</strong> including solving server-side errors (like 'window is not defined').</li>
                    <li><strong>React Google Maps and Leaflet.js,</strong> creating maps with dynamic circles based on data values.</li>

                <li><strong>DataTables</strong> with PDF export functionality.</li>
                <li><strong>UI/UX design,</strong> possibly using Figma and Photoshop for frontend work.</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-md-3 footer-border padding-footer">
            <h4>Sitemap</h4>
            <ul className="browse">
              <li>
                <Link
                  to={"/browseproject"}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  <p>Browse offering</p>
                </Link>
              </li>

              <li>
                <Link
                  to={"/how_to_invest"}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  <p>How to Start</p>
                </Link>
              </li>

              <li>
                <Link
                  to={"/about"}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  <p>About us</p>
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  <p>Contact us</p>
                </Link>
              </li>

              <li>
                <Link
                  to={"/whitePapers"}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}>
                  <p>Whitepapers</p>
                </Link>
              </li>
              <li>
                <Link
                  to={"/blog"}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  <p>Blog</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-border-bottom padding-footer">
            <h4>Community</h4>
            <ul className="browse">
              <li><p>Facebook</p></li>
              <li><p>Telegram</p></li>
              <li><p>Pinterest</p></li>
              <li><p>Instagram</p></li>
              <li><p>linkedIn</p></li>
              <li><p>Facebook</p></li>
            </ul>
          </div>
        </div>

        <div className="row footerContainer_footerLast-">
          <div className="col-md-6 footer-info footer-border-right padding-footer_col1">
            <div className="footerWidth">
              <h4>Contact Us</h4>
              <p>Do you have any questions? Below you can find our contact. RZ-8, Sweet home, Jain Colony, Part III, Uttam Nagar West, Delhi - 110059
              </p>
            </div>

            <div className="col-md-6 footer-info footer-border-right padding-footerLast_col1 d-xl-none d-lg-none d-md-none">
            <div className="footerWidth">
              <div className="email">
                <p>E-mail: <a href = "satyarihand@gmail.com">satyarihand@gmail.com</a></p>
                <p>Mobile: 9650964531 </p>
              </div>
            </div>
          </div>

          </div>
          <div className="col-md-6 padding-footer">
            <div className="privacypolicy">
              <Link
                to={"/privacyPolicy"}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              >
                <p>Privacy Policy</p>
              </Link>

              <Link
                to={"/termsCondition"}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              >
                <p>Terms of Use</p>
              </Link>
              <Link
                to={"/faq"}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
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
                <p>Mobile: 9650964531</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 padding-footerLast">
            <div className="d-flex align-items-baseline justify-content-between">
            <div className="copyright">© 2024 All Rights Reserved.</div>
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
