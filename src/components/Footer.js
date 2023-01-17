import "../components/Footer.css";
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
           <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Online</p>
                        <p>Lebanon</p>
                    </div>
                </div>
                <div className="Phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                            +961 76030845 
                    </h4>
                </div>
                
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                            hamza.kotob@outlook.com 
                     </h4>
                </div>
           </div>

           <div className="right">
                <h4>About the company</h4>
                <p>This is me Hamza Kotob. CEO &
                Founder of Webuild Technology.
                We Create Mobile and Web apps that meet your needs</p>
                
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </div>
           </div>
        </div>
    </div>
  );
};

export default Footer
