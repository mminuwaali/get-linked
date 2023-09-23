import './style.sass';
import { } from 'react';
import { Link } from 'react-router-dom';
import { logo, pin, phone, instagram, facebook, twitter, linkedin } from '../../config';

export default function () {
    return <footer>
        <div className="flex">
            <Link to='/'><img src={logo} alt="" className="logo" /></Link>
            <p>
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of showcasing
                young and talented individuals in the field of technology
            </p>

            <span>Terms of Use <b>|</b> Privacy Policy</span>
        </div>
        <div className="flex">
            <h3>Useful Links</h3>
            <div className="content">
                <Link to='/'>Overview</Link>
                <Link to='/'>Timeline</Link>
                <Link to='/'>FAQs</Link>
                <Link to='/register'>Register</Link>
                
                <div className="social-links">
                    <span>Follow us</span>
                    <a target='_blank' href="#"><img src={instagram} alt="" /></a>
                    <a target='_blank' href="#"><img src={twitter} alt="" /></a>
                    <a target='_blank' href="#"><img src={facebook} alt="" /></a>
                    <a target='_blank' href="#"><img src={linkedin} alt="" /></a>
                </div>
            </div>
        </div>
        <div className="flex">
            <h3>Contact Us</h3>
            <div className="content">
                <a type='button'>
                    <img src={phone} alt="" className="icon" />
                    +234 6707653444
                </a>
                <a type='button'>
                    <img src={pin} alt="" className="icon" />
                    27,Alara Street Yaba 100012 Lagos State
                </a>
            </div>
        </div>
        <div className="flex">
            <span>All rights reserved. © getlinked Ltd.</span>
        </div>
    </footer>;
};
