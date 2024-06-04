"use client"
import { GeistMono } from 'geist/font/mono';

import React, { useState, useEffect } from 'react';

const ScreenDetector: React.FC = () => {
    const [screenSize, setScreenSize] = useState<string>('');

    const handleResize = () => {
        setScreenSize(`${window.innerWidth} x ${window.innerHeight}`);
    };

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section>
            <p className={GeistMono.className}>
                {screenSize}
            </p>
        </section>
    );
};

export default ScreenDetector;