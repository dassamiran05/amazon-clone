import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center relative z-50'>
            <RotatingLines
                strokeColor="#febb69"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={true}
            />
        </div>
    );
};

export default Loading;