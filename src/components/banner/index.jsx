import './style.sass';
import { } from 'react';
import { Link } from 'react-router-dom';
import { banner, bannerText } from '../../config';

export default function () {
    return <section id="banner">
        <div className="text">
            <h2>Igniting a Revolution in HR Innovation</h2>
        </div>
        <div className="flex">
            <img loading='eager' src={bannerText} alt="" className="text" />
            <p>
                Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
            </p>
            <Link to='/register' className='button'>Register</Link>
            <div className="time">
                <span>00<b>h</b></span>
                <span>00<b>m</b></span>
                <span>00<b>s</b></span>
            </div>
        </div>
        <div className="flex">
            <img loading='eager' src={banner} alt="banner image" className="banner" />
        </div>
    </section>;
};
