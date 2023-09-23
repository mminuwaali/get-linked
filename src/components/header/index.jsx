import './style.sass';
import { useState } from 'react';
import { logo } from '../../config';
import {Link} from 'react-router-dom';

export default function (props) {
    const [open, setOpen] = useState(0);

    return <header {...props}>
        <img src={logo} alt="" className="logo" />
        <nav className={open ? 'open' : ''}>
            <Link to="/">Timeline</Link>
            <Link to="/">Overview</Link>
            <Link to="/">FAQs</Link>
            <Link to="/">Contact</Link>
            <Link to='/register' className='button'>Register</Link>

            <span className="close" onClick={() => setOpen(false)}>
                <i />
            </span>
        </nav>
        <span className="open" onClick={() => setOpen(true)}>
            <i />
        </span>
    </header>;
};
