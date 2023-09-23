import { useEffect } from 'react';
import { auth } from '../../config';
import { $register } from '../../components/forms';
import { $success } from '../../components/modals';
import { useMyStore, useMyDispatch } from '../../store';

export default function ({ setUri }) {
    setUri(auth);
    const { register,resetRegisterSuccess } = useMyDispatch();
    const { auth: { loading, error, success } } = useMyStore();

    useEffect(() => {
        if (error) console.log(error);
    }, [error]);

    return <>
        <$success visible={success} onClick={resetRegisterSuccess} />
        <$register loading={loading} success={success} handleSubmit={register} />
    </>;
};
