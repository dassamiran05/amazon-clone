import React, { useEffect, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { emptyCart } from '../assets/index';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Cart = ({ cartItems, handleDeleteproduct, handleDelete, handleAddtoCart }) => {
    const [totalprice, setTotalprice] = useState(null);

    useEffect(() => {
        const getTotalPrice = () => {
            let total = 0;
            cartItems.map(x => {
                total += x.qty * x.price;
                return setTotalprice(total.toFixed(2));
            });
        }

        getTotalPrice();
    }, [cartItems])


    

    return (
        <div className='w-full bg-gray-100 p-4'>
            {
                cartItems.length > 0 ?
                    <>
                        <div className='container mx-auto h-auto grid grid-cols-5 gap-6'>
                            <div className='w-full h-full bg-white px-4 col-span-4'>
                                <div className='forn-titleFont flex items-center justify-between py-3 border-b-[1px] border-b-gray-400'>
                                    <h2 className='text-3xl font-semibold'>Shopping Cart</h2>
                                    <h4 className='text-xl font-semibold'>Subtitle</h4>
                                </div>
                                {/* Cart Products start here */}
                                <div>
                                    {
                                        cartItems.map(item => (
                                            <div key={item.id} className='w-full border-b-[1px] border-b-gray-300 p-4 flex  items-center gap-5'>
                                                <div className='w-1/5'>
                                                    <img className="w-full h-44 object-contain" src={item.image} alt={item.title} />
                                                </div>
                                                <div className='w-4/5 flex justify-between'>
                                                    <div className='max-w-content'>
                                                        <h2 className='font-semibold text-lg'>{item.title}</h2>
                                                        <p className='text-sm pr-10'>{item.description}</p>
                                                        <p className='text-base'>Unit price <span className='font-semibold'>${item.price}</span></p>
                                                        <div className='bg-[#F0F2F2] flex gap-3 mt-2 drop-shadow-lg w-40 py-1.5 px-1'>
                                                            <p className='flex items-center justify-center'>Qty:</p>
                                                            <p className='flex items-center justify-center bg-gray-200 hover:bg-gray-300 px-3 py-1 text-xl cursor-pointer rounded-md duration-400' onClick={() => handleDelete(item)}>-</p>
                                                            <p className='flex items-center justify-center'>{item.qty}</p>
                                                            <p className='flex items-center justify-center bg-gray-200 hover:bg-gray-300 px-3 py-1 text-xl cursor-pointer rounded-md duration-400' onClick={() => handleAddtoCart(item)}>+</p>
                                                        </div>
                                                        <button className='bg-red-500 hover:bg-red-700 active:bg-red-900 duration-300 w-36 py-1 rounded-lg mt-3 text-white' onClick={() => handleDeleteproduct(item)}>Delete Item</button>
                                                    </div>
                                                    <div className='text-lg font-titlefont font-semibold'>${item.qty * item.price}</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='w-full h-52 bg-white flex flex-col items-center justify-center col-span-1 p-5'>
                                <div>
                                    <p className='flex gap-2 items-center text-sm'>
                                        <span>
                                            <CheckCircleIcon className='text-white text-green-500 rounded-full' />{" "}
                                        </span>
                                        Your order is eligible for FREE Delivery.
                                        Select this option at checkout. Details
                                    </p>
                                </div>
                                <div>
                                    <p className='font-semibold px-10 py-1 flex items-center justify-between'>Total:&nbsp;&nbsp; <span className='text-lg font-bold'>${totalprice}</span></p>
                                </div>
                                <button className='font-titleFont font-medium text-base bg-[#FFD814] hover:bg-[#F7CA00] duration-200 py-1.5 w-full text-center rounded-md'>Proceed to pay</button>
                            </div>
                        </div>
                    </>
                    :
                    <motion.div 
                        initial={{ y : 70, opacity : 0 }} 
                        animate={{ y : 0, opacity : 1}} 
                        transition={{ delay: 0.5, duration: 0.5}} 
                        className='w-full py-10 flex items-center justify-center gap-4'
                    >
                        <div>
                            <img src={emptyCart} alt="Emptycart" />
                        </div>
                        <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shodow-lg">
                            <h1 className='font-titleFont text-xl font-bold'>Your cart is Empty</h1>
                            <p className="text-sm text-center">
                                Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, videos, etc.
                            </p>
                            <Link to='/'>
                                <button className='mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg'>Continue Shopping</button>
                            </Link>
                        </div>
                    </motion.div>
            }
        </div>
    );
};

export default Cart;