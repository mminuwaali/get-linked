import './style.sass';
import { useState } from 'react';

export default function ({ handleSubmit }) {
    const [data, setData] = useState({});

    const handleUpdateData = ({ currentTarget: t }) => {
        setData(prev => ({ ...prev, [t.name]: t.value }));
    };
    const onSubmit = ev => {
        ev.preventDefault();
        if (handleSubmit) handleSubmit?.(data);
        else alert("You forgot to set the handleSubmit prop");
    };

    return <form onSubmit={onSubmit} id="register-form">
        <div className="header">
            <h3>
                Questions or need assistance?
                Let us know  about it!
            </h3>

            <p>
                Email us below to any question related
                to our event
            </p>
        </div>
        <div className="content">
            <div className="form-group">
                <input type="text" name='name' placeholder='First Name' required />
            </div>
            <div className="form-group">
                <input type="email" name='email' placeholder='Mail' required />
            </div>
            <div className="form-group">
                <textarea name="message" id="" placeholder='Message'></textarea>
            </div>
        </div>
        <div className="footer">
            <button>Submit</button>
        </div>
    </form>;
};