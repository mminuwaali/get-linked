import './style.sass';
import { } from 'react';
import { partnersImage } from '../../config';

export default function () {
    return <section id="partners">
        <h2>Partners and Sponsors</h2>
        <p>
            Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
        </p>
        <img loading='lazy' src={partnersImage} alt="" className="partners-image" />
    </section>
}