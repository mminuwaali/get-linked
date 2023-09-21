import './style.sass';
import { useState } from 'react';
import { logo } from '../../config';

export default function () {
    const [open, setOpen] = useState(0);

    return <header>
        <img src={logo} alt="" className="logo" />
        <nav className={open ? 'open' : ''}>
            <a href="#">Timeline</a>
            <a href="#">Overview</a>
            <a href="#">FAQs</a>
            <a href="#">Contact</a>
            <button>Register</button>

            <span className="close" onClick={() => setOpen(false)}>
                <i />
            </span>
        </nav>
        <span className="open" onClick={() => setOpen(true)}>
            <i />
        </span>
    </header>;
};
