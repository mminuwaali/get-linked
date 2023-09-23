import './style.sass';
import { useEffect, useState } from 'react';
import { socialLinks } from '../../../config';

export default function ({ handleSubmit, loading, success, setSuccess }) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (success) {
            setData({});
            setSuccess(0);
        }
    }, [success]);

    const handleUpdateData = ({ currentTarget: t }) => {
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
                <input type="text" value={data?.first_name || ''} name='first_name' placeholder='First Name' required onChange={handleUpdateData} />
            </div>
            <div className="form-group">
                <input type="email" value={data?.email || ''} name='email' placeholder='Mail' required onChange={handleUpdateData} />
            </div>
            <div className="form-group">
                <input type="number" value={data?.phone_number || ''} name='phone_number' placeholder='Phone Number' required onChange={handleUpdateData} />
            </div>
            <div className="form-group">
                <textarea name="message" placeholder='Message' rows={5} required onChange={handleUpdateData} />
            </div>
            <button disabled={loading}>{loading ? <i /> : <b>Submit</b>}</button>
        </div>
        <div className="footer">
            <span>Share on</span>
            <div className="links">
                {socialLinks.map(item => <a key={item.href} target='_blank' href={item.href}><img loading='eager' src={item.src} alt="" /></a>)}
            </div>
        </div>
    </form>;
};