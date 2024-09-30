import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div className="Footer">
      <div className="row">
        <div className="col-md-3">
          <img src="/images/Logo.png" alt="" className="img-logo" />
          <p></p>
          <div className='footer_icons'>
              <p className='icons_bg'>
                <FaFacebookF size={20}/>
              </p>
              <p className='icons_bg'>
                <FaInstagram size={20}/>
              </p>
              <p className='icons_bg'>
                <FaYoutube size={20}/>
              </p>
              <p className='icons_bg'>
                <FaTiktok size={20}/>
              </p>
            </div>
        </div>
        <div className="col-md-3 text-start mt-md-0 mt-4">
          <h4>Products </h4>
          <div className="Footer_inner">
            <p>
              <Link to="/">
                Video Player
              </Link>
            </p>
            <p>
              <Link to="/">
                Create
              </Link>
            </p>
            <p>
              <Link to="/">
                Live Stream
              </Link>
            </p>
            <p>
              <Link to="/">
                Moniize
              </Link>
            </p>
          </div>
        </div>

        <div className="col-md-3 text-start mt-md-0 mt-4">
          <h4>Quick Links </h4>
          <div className="Footer_inner">
            <p>
              <Link to="/">
                Home
              </Link>
            </p>
            <p>
              <Link to="/youtube">
                Youtube
              </Link>
            </p>
            <p>
              <Link to="/videos">
                Videos
              </Link>
            </p>
          </div>
        </div>
        
        <div className="col-md-3 text-start mt-md-0 mt-4">
          <h4>Contacts </h4>
          <div className="Footer_inner">
            <p>
              <Link to="/">
                Become a Partner
              </Link>
            </p>
            <p>
              <Link to="/">Guidelines</Link>
            </p>
            <p>
              <Link to="/">Live Streaming</Link>
            </p>
            <p>
              <Link to="/">Monetization</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
