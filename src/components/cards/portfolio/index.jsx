import './style.sass';
import { } from 'react';

export default function ({ image, title, subTitle, description, attributes }) {
    return <div className="portfolio-card">
        <div className="flex">
            <img loading='eager' src={image} alt="" />
        </div>
        <div className="flex">
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
            {description ? <p>{description}</p> : <>
                {attributes.map(item => <p key={item.title}>
                    <span>{item.title}:</span> {item.content}
                </p>)}
                <button>Read More</button>
            </>}
        </div>
    </div>;
};
