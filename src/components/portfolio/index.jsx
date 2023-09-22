import './style.sass';
import { } from 'react';
import { $portfolio } from '../cards';
import { portfolios } from '../../config';

export default function () {
    return <section id="portfolio">
        {portfolios.map((item, index) => <$portfolio key={index} {...item} />)}
    </section>;
};
