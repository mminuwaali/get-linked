import './style.sass';
import { } from 'react';
import { Link } from 'react-router-dom';
import { logo, pin, phone, socialLinks } from '../../config';

export default function () {
    return <footer>
        <div className="flex">
            <Link to='/'><img loading='lazy' src={logo} alt="" className="logo" /></Link>
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
                <a href='#timeline'>Overview</a>
                <a href='#timeline'>Timeline</a>
                <a href='#faq'>FAQs</a>
                <Link to='/register'>Register</Link>

                <div className="social-links">
                    <span>Follow us</span>
                    {socialLinks.map(item => <a key={item.href} target='_blank' href={item.href}><img loading='lazy' src={item.src} alt="" /></a>)}
                </div>
            </div>
        </div>
        <div className="flex">
            <h3>Contact Us</h3>
            <div className="content">
                <a type='button'>
                    <img loading='lazy' src={phone} alt="" className="icon" />
                    +234 6707653444
                </a>
                <a type='button'>
                    <img loading='lazy' src={pin} alt="" className="icon" />
                    27,Alara Street Yaba 100012 Lagos State
                </a>
            </div>
        </div>
        <div className="flex">
            <span>All rights reserved. © getlinked Ltd.</span>
        </div>
    </footer>;
};
