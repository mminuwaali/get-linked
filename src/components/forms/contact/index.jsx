import './style.sass';
import { useState } from 'react';
import { twitter, facebook, instagram, linkedin } from '../../../config';

export default function ({ handleSubmit, loading }) {
    const [data, setData] = useState({});

    const handleUpdateData = ({ currentTarget: t }) => {
        console.log(t.name, t.value);
        setData(prev => ({ ...prev, [t.name]: t.value }));
    };
    const onSubmit = ev => {
        ev.preventDefault();
        if (handleSubmit) handleSubmit?.(data);
        else alert("You forgot to set the handleSubmit prop");
    };

    return <form onSubmit={onSubmit} id="contact-form" className={loading ? 'loading' : ''}>
        <div className="head">
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
                <input type="text" name='first_name' placeholder='First Name' required onChange={handleUpdateData} />
            </div>
            <div className="form-group">
                <input type="email" name='email' placeholder='Mail' required onChange={handleUpdateData} />
            </div>
            <div className="form-group">
                <input type="number" name='phone_number' placeholder='Phone Number' required onChange={handleUpdateData} />
            </div>
            <div className="form-group">
                <textarea name="message" placeholder='Message' rows={5} required onChange={handleUpdateData} />
            </div>
            <button disabled={loading}>{loading ? <i /> : <b>Submit</b>}</button>
        </div>
        <div className="footer">
            <span>Share on</span>
            <div className="links">
                <a target='_blank' href="#"><img src={instagram} alt="" /></a>
                <a target='_blank' href="#"><img src={twitter} alt="" /></a>
                <a target='_blank' href="#"><img src={facebook} alt="" /></a>
                <a target='_blank' href="#"><img src={linkedin} alt="" /></a>
            </div>
        </div>
    </form>;
};