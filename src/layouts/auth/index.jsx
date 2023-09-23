import "./style.sass";
import { useState } from "react";
import $header from '../../components/header';

// A higher order component that returns a react functional component
export default function ($element) {
    return () => {
        const [uri, setUri] = useState(null);

        return <section id="auth">
            <$header />
            <div className="header">
                <h2 href="#">Register</h2>
            </div>
            <div className="auth-container">
                <aside>
                    <img loading='eager' src={uri} alt="authentication image" className="auth-image" />
                </aside>

                <main>
                    <$element setUri={setUri} />
                </main>
            </div>
        </section>;
    };
};