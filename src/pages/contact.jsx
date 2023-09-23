import { useState } from 'react';
import api from '../utilities/axios';
import { toast } from 'react-toastify';
import { $contact } from "../components/forms";

export default function () {
    const [success, setSuccess] = useState(0);
    const [loading, setLoading] = useState(0);

    const handleSubmit = async (data) => {
        setLoading(1);
        try {
            await api.post("contact-form", data);
            toast.success("Thank you, your response has been recorded successfully");
            setSuccess(true);
        } catch (error) {
            toast.error("Failed to submit the form data, something went wrong");
        }; setLoading(0);
    };
    return <$contact loading={loading} success={success} setSuccess={setSuccess} handleSubmit={handleSubmit} />;
};
