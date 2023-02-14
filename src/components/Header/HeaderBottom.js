import React, { useEffect, useRef, useState } from 'react';
import { amazonApp } from '../../assets';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { motion } from "framer-motion"
import CloseIcon from '@mui/icons-material/Close';
import SideNavContent from './SideNavContent';
import { submenu } from '../../constants';

const HeaderBottom = ({ user }) => {
    const [sidebar, setSidebar] = useState(false);
    const ref = useRef();



    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if (e.target.contains(ref.current)) {
                setSidebar(false);
            }
        })
    }, [ref]);



    return (
        <div className='w-full px-4 h-[39px] bg-amazon_light text-white flex items-center relative'>
            <ul className='flex items-center gap-2 text-sm tracking-wide'>
                <li className='headerHover flex items-center gap-1' onClick={() => setSidebar(true)}><MenuIcon /> All</li>
                <li className='headerHover hidden mdl:inline-flex'>Amazon miniTV</li>
                <li className='headerHover hidden mdl:inline-flex'>Best Sellers</li>
                <li className='headerHover hidden mdl:inline-flex'>Mobiles</li>
                <li className='headerHover hidden mdl:inline-flex'>Customer SErvice</li>
                <li className='headerHover hidden mdl:inline-flex'>Electronics</li>
                <li className='headerHover hidden mdl:inline-flex'>Amazon pay</li>
                <li className='headerHover hidden mdl:inline-flex'>Fashion</li>
                <li className='absolute right-0 cursor-pointer'>
                    <img src={amazonApp} alt="Amazon app" />
                </li>
            </ul>


            {
                sidebar && (
                    <div className='w-full h-screen z-50 text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                        <div className="w-full h-full relative">
                            <motion.div ref={ref} initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="w-[80%] md:w-[350px] h-full bg-white border border-black overflow-y-scroll" >
                                <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                                    {user ?
                                        <img src={user.photoURL} alt="" style={{width:'40px',height:'40px', borderRadius:'50%'}}/>
                                        :
                                        <AccountCircleIcon
                                        />
                                    }
                                    <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, {user ? user.displayName : 'Sign in'}</h3>
                                </div>
                                {
                                    submenu?.map(menu => <SideNavContent key={menu.id} menu={menu} />)
                                }
                                <span onClick={() => setSidebar(false)} className='cursor-pointer w-10 h-10 text-black bg-gray-200 hover:bg-red-500 hover:text-white duration-300 flex items-center justify-center border absolute top-0 left-[82%] md:left-[360px]'><CloseIcon /></span>
                            </motion.div>

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default HeaderBottom;