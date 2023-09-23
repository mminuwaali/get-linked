import './style.sass';
import { useState } from 'react';
import { logo } from '../../config';
import { Link } from 'react-router-dom';

export default function (props) {
    const [open, setOpen] = useState(0);

    return <header {...props}>
        <Link to='/'><img src={logo} alt="" className="logo" /></Link>
        <nav className={open ? 'open' : ''}>
            <Link to="/">Timeline</Link>
            <Link to="/">Overview</Link>
            <Link to="/">FAQs</Link>
            <Link to="/contact">Contact</Link>
            <Link to='/register' className='button'><span>Register</span></Link>

            <span className="close" onClick={() => setOpen(false)}>
                <i />
            </span>
        </nav>
        <span className="open" onClick={() => setOpen(true)}>
            <i />
        </span>
    </header>;
};
