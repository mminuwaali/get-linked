import { auth } from '../../config';
import { $register } from '../../components/forms';

export default function ({ setUri }) {
    setUri(auth);
    
    const handleSubmit = (data) => {
        console.log(data);
    };

    return <$register handleSubmit={handleSubmit} />;
};
