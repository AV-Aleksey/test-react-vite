import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

const getDeviceConfig = (width: number): string => {
    if (width < 1279) {
        return 'md';
    } else if (width >= 1280 && width < 1439) {
        return 'lg';
    } else if (width >= 1440 && width < 1919) {
        return 'xl';
    }
    return 'xxl';
};

export const useBreakpoint = (): string => {
    const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));

    useEffect(() => {
        const calcInnerWidth = throttle(() => {
            setBrkPnt(getDeviceConfig(window.innerWidth));
        }, 200);

        window.addEventListener('resize', calcInnerWidth);

        return () => window.removeEventListener('resize', calcInnerWidth);
    }, []);

    return brkPnt;
};
