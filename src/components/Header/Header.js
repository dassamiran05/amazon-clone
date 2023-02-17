import React, { useContext, useEffect, useRef, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logo } from '../../assets';
import { allCategories } from '../../constants';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = ({ cartItems }) => {
    const [showAll, setShowall] = useState(false);
    const [selected, setSelected] = useState("");

    const { user, signOutUser } = useContext(AuthContext);

    const ref = useRef(null);


    useEffect(() => {
        document.body.addEventListener('mousedown', (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setShowall(false);
            }
        })
    }, [ref]);



    const handleselect = item => {
        setSelected(item);
        setShowall(false);
    }

    const handleSignout = () => {
        signOutUser()
            .then(res => {
                console.log("Successfully sign out");
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='w-full'>
            <div className='w-full bg-amazon_blue flex items-center gap-4 px-4 py-3 text-white justify-center'>
                <div className='headerHover'>
                    <Link to="/"><img className='w-24 mt-2' src={logo} alt="" /></Link>
                </div>
                <div className='headerHover hidden mdl:inline-flex'>
                    <LocationOnIcon />
                    <p className='flex flex-col text-sm text-lightText font-light'>Deliver to <span className="text-sm font-semibold -mt-1 text-whiteText">Kolkata</span></p>
                </div>
                <div className="h-10 rounded hidden lgl:flex items-center flex-grow relative">
                    <span onClick={() => setShowall(!showAll)} className='w-auto px-1 h-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 duration-300 text-amazon_blue cursor-pointer rounded-tl-md rounded-bl-md text-sm'>{selected ? selected : 'All'} <span></span><ArrowDropDownIcon /></span>
                    {
                        showAll && (
                            <div>
                                <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden z-50 bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1' ref={ref} >
                                    {
                                        allCategories.map(item => <li key={item._id} onClick={() => handleselect(item.title)} className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'>{item.title}</li>)
                                    }

                                </ul>
                            </div>
                        )
                    }
                    <input type="text" className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2" />
                    <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'><SearchIcon /></span>
                </div>
                <Link to="/signin">
                    <div className="flex flex-col items-start justify-center headerHover">
                        <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light'>Hello, {user ? user.displayName : 'Sign in'}</p>
                        <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">Accounts & Lists <span><ArrowDropDownIcon /></span></p>
                    </div>
                </Link>
                <div className="flex flex-col items-start justify-center headerHover hidden lgl:flex">
                    <p className='text-sm text-lightText font-light'>Returns</p>
                    <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders </p>
                </div>

                <Link to="/cart">
                    <div className="flex items-start justify-center headerHover relative">
                        <ShoppingCartIcon />
                        <p className="text-xs font-semibold mt-3 text-whiteText">Cart <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex items-center justify-center">{cartItems.length > 0 ? cartItems.length : 0}</span></p>
                    </div>
                </Link>
                {/* {
                    user && (
                        <Link to="/checkout">
                            <div className='flex flex-col items-center justify-center relative cursor-pointer headerHover'>
                                <p className='hidden mdl:inline-flex text-xs font-semibold text-white'>Checkout</p>
                            </div>
                        </Link>
                    )
                } */}
                {
                    user && (
                        <div className='flex flex-col items-center justify-center relative cursor-pointer headerHover' onClick={handleSignout}>
                            <LogoutIcon />
                            <p className='hidden mdl:inline-flex text-xs font-semibold text-white'>Logout</p>
                        </div>
                    )
                }
            </div>
            <HeaderBottom user={user} />
        </div>
    );
};

export default Header;