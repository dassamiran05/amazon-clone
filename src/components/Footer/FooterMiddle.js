import React, { useState } from 'react';
import { logo } from '../../assets';
import LanguageIcon from '@mui/icons-material/Language';
import { languages } from '../../constants';
import './footerMiddle.css';
import { Link } from 'react-router-dom';
const FooterMiddle = () => {

    const [selectLanguage, setSelectLanguage] = useState('');

    return (
        <div className='w-full bg-amazon_light text-white px-10 py-10'>
            <div className="w-full border-b-[1px] border-gray-500 pb-10">
                <div className='max-w-5xl mx-auto text-gray-300 flex justify-between'>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                        <div>
                            <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Get to Know Us</h3>
                            <ul className='flex flex-col gap-2 font-bodyFont'>
                                <li className='footerLink'>About Us</li>
                                <li className='footerLink'>Careers</li>
                                <li className='footerLink'>Press Releases</li>
                                <li className='footerLink'>Amazon Science</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Connect with Us</h3>
                            <ul className='flex flex-col gap-2 font-bodyFont'>
                                <li className='footerLink'>Facebook</li>
                                <li className='footerLink'>Twitter</li>
                                <li className='footerLink'>Instagram</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Make Money with Us</h3>
                            <ul className='flex flex-col gap-2 font-bodyFont'>
                                <li className='footerLink'>Sell on Amazon</li>
                                <li className='footerLink'>Sell under Amazon Accelerator</li>
                                <li className='footerLink'>Protect and Build Your Brand</li>
                                <li className='footerLink'>Amazon Global Selling</li>
                                <li className='footerLink'>Become an Affiliate</li>
                                <li className='footerLink'>Fulfilment by Amazon</li>
                                <li className='footerLink'>Advertise Your Products</li>
                                <li className='footerLink'>Amazon Pay on Merchants</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-titleFont text-white text-base font-semibold mb-3'>Let Us Help You</h3>
                            <ul className='flex flex-col gap-2 font-bodyFont'>
                                <li className='footerLink'>COVID-19 and Amazon</li>
                                <li className='footerLink'>Your Account</li>
                                <li className='footerLink'>Returns Centre</li>
                                <li className='footerLink'>100% Purchase Protection</li>
                                <li className='footerLink'>Amazon App Download</li>
                                <li className='footerLink'>Amazon Assistant Download</li>
                                <li className='footerLink'>Help</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-12 items-center justify-center py-6">
                <div>
                    <Link to="/"><img className="w-20 pt-3" src={logo} alt="logo" /></Link>
                </div>
                <div className="w-24 flex gap-2 group relative">
                    <p className='text-sm flex gap-2 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-700 px-2 py-1'>
                        <LanguageIcon />
                        <span>
                            {selectLanguage ? selectLanguage : 'English'}
                        </span>
                    </p>
                    <div className='w-52 p-3 h-auto flex flex-col gap-4 bg-gray-200 hidden group-hover:block absolute left-0 top-8 lang'>
                        <div className="up-arrow"></div>
                        {
                            languages.map(item => (
                                <div key={item.id} className='flex gap-3 mb-2 text-[#333] cursor-pointer hover:text-[#febd69]'>
                                    <input type="radio" value={item.lang} name="language" onClick={() => setSelectLanguage(item.lang)} /> {item.lang}
                                </div>
                            ))
                        }
                    </div>


                </div>
            </div>
            <div className='w-full flex items-center justify-center'>
                <ul className='flex gap-3 flex-wrap justify-center'>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>Australia</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>Brazil</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>Canada</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>China</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>France</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>Germany</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>Italy</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>Japan</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>Mexico</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>Netherlands</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>Poland</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>Singapore</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>Spain</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>Turkey</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>United Arab Emirates</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>United Kingdom</li>
                    <li className='text-xs cursor-pointer hover:underline duration-100'>United States</li>
                </ul>
            </div>
        </div>
    );
};

export default FooterMiddle;