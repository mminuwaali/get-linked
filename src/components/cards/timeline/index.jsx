import "./style.sass";
import { } from 'react';

export default function ({ number, left, right }) {
    return <div className="timeline-card">
        <span className="number">{number}</span>
        <div className="flex">
            <h3>{left.title}</h3>
            {left?.description && <p>{left.description}</p>}
        </div>
        <div className="flex">
            <h3>{right.title}</h3>
            {right?.description && <p>{right.description}</p>}
        </div>
    </div>
};