import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SideNavContent = ({menu}) => {
    return (
        <div className='py-3 border-b-[1px] border-b-gray-300'>
            <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">{menu.title}</h3>
            <ul className='text-sm'>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer duration-200'>
                    {menu.one}
                    <span><KeyboardArrowRightIcon /></span>
                </li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer duration-200'>
                    {menu.two}
                    <span><KeyboardArrowRightIcon /></span>
                </li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer duration-200'>
                    {menu.three}
                    <span><KeyboardArrowRightIcon /></span>
                </li>
            </ul>
        </div>
    );
};

export default SideNavContent;