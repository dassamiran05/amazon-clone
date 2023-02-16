import React from 'react';
import { Link } from 'react-router-dom';

const FooterTop = () => {
    return (
        <div className='w-full bg-white py-6'>
            <div className='w-full border-t-[1px] border-b-[1px] py-8'>
                <div className='w-64 mx-auto text-center flex flex-col gap-1'>
                    <p className='text-sm'>See Personalised recommendation</p>
                    <Link to="/signin"><button className='w-full rounded-md bg-[#ffc83d] text-[#000] py-1 font-semibold cursor-pointer active:bg-yellow-700'>Sign in</button></Link>
                    <p className='text-sm'>New Customer <Link to="/signup"><span className='text-[#007185] cursor-pointer'>Start here</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;