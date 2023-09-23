import { auth } from '../../config';
import { $register } from '../../components/forms';
import { useMyStore, useMyDispatch } from '../../store';
import { useEffect } from 'react';

export default function ({ setUri }) {
    setUri(auth);
    const { register } = useMyDispatch();
    const { auth: { loading, error } } = useMyStore();

    useEffect(() => {
        if (error) console.log(error);
    }, [error]);

    return <$register loading={loading} handleSubmit={register} />;
};
