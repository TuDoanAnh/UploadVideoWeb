import { useState, forwardRef } from 'react';
import image from '~/assets/image';

const Image = forwardRef(({ src, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(image.defaultAvatar);
    };
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img ref={ref} src={fallBack || src} {...props} onError={handleError} />
    );
});

export default Image;
