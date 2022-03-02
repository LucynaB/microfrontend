import {startMarketing} from 'marketing/MarketingApp';
import React, {useRef, useEffect} from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        startMarketing(ref.current);
    });

    return <div ref={ref}/>
};