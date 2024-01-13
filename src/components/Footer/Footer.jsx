import "./Footer.scss";
import React from "react";
import {FaLocationArrow, FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png"

const Footer = () => {
    return(
        <footer className="footer">

            <div className="footer-content">

            <div className="col">
                <div className="title">About</div>
                <div className="item">Dhrhehbw hwehenjw ejdnncsmnc sjdnksdcoiwec 
                jksdnckdsncdnsc ksjndkncswdk sjjsdcn sjdcnsdc nsdnkdwc kwdc kndwcnk kwjnckc a jkwqdnknasc qwdjnqnd
                </div>

            </div>

            <div className="col">

                <div className="title">Contact</div>
                <div className="c-items">
                    <FaLocationArrow/>
                    <div className="item">
                        kalala rd, Punnana, Lothatha, Alapuza,
                         kerala , 69006
                    </div>
                </div>

                <div className="c-items">
                    <FaMobileAlt/>
                    <div className="item">
                        Phone: 901-101-1001
                    </div>
                </div>

                <div className="c-items">
                    <FaEnvelope/>
                    <div className="item">
                        Email: allinone@gmail.com
                    </div>
                </div>
            </div>

            <div className="col">

                <div className="title">Categories</div>
                <div className="item">HeadPhones</div>
                <div className="item">SmartWatches</div>
                <div className="item">BlueTooth Speakers</div>
                <div className="item">WireLess EarBuds</div>
                <div className="item">home Theatre</div>
                <div className="item">Projector</div>
               
            </div>

            <div className="col">
                
                <div className="title">Pages</div>
    
                <div className="item">Home</div>
                <div className="item">About</div>
                <div className="item">Privacy Policy</div>
                <div className="item">Returns</div>
                <div className="item">Terms & Conditions</div>
                <div className="item">Contact Us</div>
            </div>

            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        ALL IN ONE 2002 CREATED BY AD , PREMIUM E-COMMERCE
                    </div>

                    <img src={Payment}  />
                </div>
            </div>
        </footer>

    );
};

export default Footer;
