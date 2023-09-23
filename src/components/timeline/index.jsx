import "./style.sass";
import { } from 'react';
import { $timeline } from '../cards';
import { timelines } from "../../config";

export default function () {
    return <section id="timeline">
        <div className="header">
            <h2>Timeline</h2>
            <p>
                Here is the breakdown of the time we anticipate using for the upcoming event.
            </p>
        </div>
        <div className="content">
            {timelines.map((item, id) => <$timeline {...item} number={id + 1} key={id} />)}
        </div>
    </section>;
};
