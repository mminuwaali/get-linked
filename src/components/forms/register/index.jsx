import './style.sass';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import api from '../../../utilities/axios';
import { male, female } from '../../../config';

export default function ({ handleSubmit, loading, success }) {
    const [accept, setAccept] = useState(false);
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState({ group_size: 1 });

    useEffect(() => {
        getGategories();
    }, []);

    useEffect(() => {
        if (success) {
            setAccept(false);
            setData({ group_size: 1 });
        }
    }, [success]);

    const getGategories = async () => {
        try {
            let res = await api.get('categories-list');
            setCategories(res.data);
        } catch (error) {
            toast.error("Failed to fetch categories");
        };
    };

    const handleUpdateData = ({ currentTarget: t }) => {
        console.log(t.name, t.value);
        setData(prev => ({ ...prev, [t.name]: t.value }));
    };
    const onSubmit = ev => {
        ev.preventDefault();
        if (handleSubmit) handleSubmit?.({ ...data, privacy_poclicy_accepted: accept });
        else alert("You forgot to set the handleSubmit prop");
    };

    return <form onSubmit={onSubmit} id="register-form" className={loading ? 'loading' : ''}>
        <div className="head">
            <h3>Register</h3>
            <span>
                Be part of this movement!
                <b>
                    <img src={female} alt="" /><img src={male} alt="" />
                </b>
            </span>
            <h2>CREATE YOUR ACCOUNT</h2>
        </div>
        <div className="content">
            <div className="form-group">
                <label htmlFor="team_name">Team's Name</label>
                <input type="text" value={data?.team_name || ''} name='team_name' placeholder='Enter the name of your group' required onChange={handleUpdateData} />
            </div>
            <div className="form-group">
                <label htmlFor="phone_number">Phone</label>
                <input type="text" value={data?.phone_number || ''} name='phone_number' placeholder='Enter your phone number' required onChange={handleUpdateData} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" value={data?.email || ''} name='email' placeholder='Enter your email address' required onChange={handleUpdateData} />
            </div>
            <div className="form-group">
                <label htmlFor="project_topic">Project Topic</label>
                <input type="text" value={data?.project_topic || ''} name='project_topic' placeholder='What is your group project topic' required onChange={handleUpdateData} />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select value={data?.category || ''} name="category" required onChange={handleUpdateData}>
                    <option value="" hidden>Select your category</option>
                    {categories.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="group_size">Group Size</label>
                <input type="number" value={data?.group_size || ''} name="group_size" min={1} required defaultValue={1} onChange={handleUpdateData} />
            </div>
        </div>
        <div className="footer">
            <i>Please review your registration details before submitting</i>
            <span onClick={() => setAccept(!accept)}>
                <input type="checkbox" checked={accept} onChange={() => null} />
                I agreed with the event terms and conditions  and privacy policy
            </span>
            <button disabled={!accept} type='submit' title={accept ? '' : 'check to enable'}>
                {loading ? <i /> : <><b>Register Now</b><b>Submit</b></>}
            </button>
        </div>
    </form>;
};