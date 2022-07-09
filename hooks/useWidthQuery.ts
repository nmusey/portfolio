import { useEffect, useState } from 'react';

const useWidthQuery = (width: string) => {
    const [isWide, setIsWide] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(`(min-width: ${width})`);
        const listener = () => setIsWide(media.matches);
        listener();
        window.addEventListener('resize', listener);

        return () => window.removeEventListener('resize', listener);
    }, [isWide]);

    return isWide;
};

export default useWidthQuery;