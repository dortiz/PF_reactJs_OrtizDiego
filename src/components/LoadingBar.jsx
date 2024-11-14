import React, { useEffect, useState } from 'react';
import '../styles/LoadingBar.css';

const LoadingBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(interval);
                }
                return Math.min(oldProgress + 10, 100); 
            });
        }, 500); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading-container">
            <div className="loading-bar-background">
                <div className="loading-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="loading-text">{progress}% Cargando...</p>
        </div>
    );
};

export default LoadingBar;