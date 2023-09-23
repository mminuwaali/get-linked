import './style.sass';
import { useState } from 'react';
import { logo } from '../../config';
import { Link } from 'react-router-dom';

export default function (props) {
    const [open, setOpen] = useState(0);

    const handleClick = () => { setOpen(0); };

    return <header {...props}>
        <Link to='/'><img src={logo} alt="" className="logo" /></Link>
        <nav className={open ? 'open' : ''}>
            <a href="#timeline" onClick={handleClick}>Timeline</a>
            <a href="#portfolio" onClick={handleClick}>Overview</a>
            <a href="#faq" onClick={handleClick}>FAQs</a>
            <Link to="/contact" onClick={handleClick}>Contact</Link>
            <Link to='/register' className='button' onClick={handleClick}><span>Register</span></Link>

            <span className="close" onClick={() => setOpen(0)}>
                <i />
            </span>
        </nav>
        <span className="open" onClick={() => setOpen(1)}>
            <i />
        </span>
    </header>;
};


