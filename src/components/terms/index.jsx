import './style.sass';
import { } from 'react';
import { lock } from '../../config';

export default function () {
    return <section id="terms">
        <div className="flex">
            <h3>Privacy Policy and </h3>
            <h4>Terms</h4>
            <p>
                Last updated on September 12, 2023
            </p>
            <p>
                Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
            </p>
            <div className="note">
                <p>
                    At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose,
                    and safeguard your data when you participate in our tech
                    hackathon event. By participating in our event, you consent
                    to the practices described in this policy.
                </p>
                <h5>Licensing Policy</h5>
                <span>Here are terms of our Standard License:</span>
                <ul>
                    <li>
                        The Standard License grants you a non-exclusive right to navigate and register for our event
                    </li>
                    <li>
                        You are licensed to use the item available at any free source sites, for your project developement
                    </li>
                </ul>
                <button>Read More</button>
            </div>
        </div>
        <div className="flex">
            <img loading='eager' src={lock} alt="" className="lock-image" />
        </div>
    </section>
}