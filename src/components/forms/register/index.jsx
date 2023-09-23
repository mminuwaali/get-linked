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
        <div className="head">
            <h3>Register</h3>
            <span>Be part of this movement!</span>
            <h2>CREATE YOUR ACCOUNT</h2>
        </div>
        <div className="content">
            <div className="form-group">
                <label htmlFor="team-name">Team's Name</label>
                <input type="text" name='team-name' placeholder='Enter the name of your group' required />
            </div>
            <div className="form-group">
                <label htmlFor="phone-number">Phone</label>
                <input type="text" name='phone-number' placeholder='Enter your phone number' required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Enter your email address' required />
            </div>
            <div className="form-group">
                <label htmlFor="project-topic">Project Topic</label>
                <input type="text" name='project-topic' placeholder='What is your group project topic' required />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select name="category" required>
                    <option value="" hidden>Select your category</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="group-size">Group Size</label>
                <select name="group-size" required>
                    <option value="" hidden>Select</option>
                </select>
            </div>
        </div>
        <div className="footer">
            <b>Please review your registration details before submitting</b>
            <span>
                <input type="checkbox" />
                I agreed with the event terms and conditions  and privacy policy
            </span>
            <button>Register Now</button>
        </div>
    </form>;
};