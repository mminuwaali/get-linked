import './style.sass';
import { } from 'react';
import { banner, bannerText } from '../../config';

export default function () {
    return <section id="banner">
        <div className="text">
            <h2>Igniting a Revolution in HR Innovation</h2>
        </div>
        <div className="flex">
            <img src={bannerText} alt="" className="text" />
            <p>
                Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
            </p>
            <button>Register</button>
            <div className="time">
                <span>00<b>h</b></span>
                <span>00<b>m</b></span>
                <span>00<b>s</b></span>
            </div>
        </div>
        <div className="flex">
            <img src={banner} alt="banner image" className="banner" />
        </div>
    </section>;
};
