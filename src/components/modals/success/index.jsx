import './style.sass';
import { } from 'react';
import { createPortal } from 'react-dom';
import { success } from '../../../config';

export default function ({ visible, onClick }) {
    return createPortal(
        visible ?
            <div id='success-modal'>
                <img loading='eager' src={success} alt="" />
                <h3>Congratulations</h3>
                <h3>you have successfully Registered!</h3>
                <p>
                    Yes, it was easy and you did it!
                    check your mail box for next step
                </p>
                <button onClick={onClick}>Back</button>
            </div> : null,
        document.querySelector("#portal")
    );
};