import "./style.sass";
import $header from '../../components/header';
import { Link } from "react-router-dom";

// A higher order component that returns a react functional component
export default function ($element) {
    return () => {
        return <section id="contact">
            <$header />
            <div className="header">
                <Link to="/"></Link>
            </div>
            <div className="contact-container">
                <aside>
                </aside>

                <main>
                    <$element />
                </main>
            </div>
        </section>;
    };
};