import React from 'react'; 
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import './footerStyles.css'

const Footer = () => {
    const iconStyles = {
        color: "black",
    };

    return  (
        <footer className="footer-section" id='footer'>
            <div className='container'>
                <i className='social-icon fab fa-facebook-f'><BsFacebook style={iconStyles} /></i>
                <i className='social-icon fab fa-instagram'><BsInstagram style={iconStyles} /></i>
                <i className='social-icon fab fa-email'><MdOutlineEmail style={iconStyles} /></i>
                <p className="copyright">Copyright  © I Heart Estate Sales. All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer; 