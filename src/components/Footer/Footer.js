import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import FooterBottom from './FooterBottom';
import FooterMiddle from './FooterMiddle';
import FooterTop from './FooterTop';

const Footer = () => {

    const {user} = useContext(AuthContext);
    return (
        <div className='font-titleFont'>
            {
                user ? '' : <FooterTop />
            }
            <FooterMiddle />
            <FooterBottom />
        </div>
    );
};

export default Footer;