import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import ApiIcon from '@mui/icons-material/Api';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './products.css'

const Products = ({handleAddtoCart, handleDelete}) => {

    const data = useLoaderData();
    // const productsData = data.data.products;
    const productsData = data.data;

    
    return (
        <div className='max-w-screen-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4'>
            {
                productsData.map(item => (
                    <div key={item.id} className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4'>
                        <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>{item.category}</span>
                        <div className='w-full h-auto flex items-center justify-center relative group'>
                            <img
                                className="w-52 h-64 object-contain pro-img"
                                src={item.image}
                                alt={item.title}
                            />
                            <ul className='w-full bg-transparent absolute -bottom-[166px] group-hover:bottom-3 duration-700 flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-1 border-r'>
                                {/* <li className='productLi'>Compare <span><ApiIcon /></span></li>
                                <li className='productLi'>Wishlist <span><FavoriteIcon /></span></li>
                                <li className='productLi'>View details <span><ArrowCircleRightIcon /></span></li>
                                <li className='productLi'>Add to Cart <span><ShoppingCartIcon /></span></li> */}
                                <li className='productLi relative'>

                                    <span className='addCartIcon hover-trigger'>
                                        <span className='absolute hover-target'>Compare</span>
                                        <ApiIcon className='hov-icon' />
                                    </span>
                                    {/* <span className='absolute hover-target'>Compare</span>
                                    <span className='addCartIcon hover-trigger'><ApiIcon /></span> */}
                                </li>
                                <li className='productLi relative'>

                                    <span className='addCartIcon hover-trigger'>
                                        <span className='absolute hover-target'>Wishlist</span>
                                        <FavoriteIcon className='hov-icon'/>
                                    </span>
                                </li>
                                <li className='productLi relative'>

                                    <span className='addCartIcon hover-trigger'><span className='absolute hover-target'>View details</span><ArrowCircleRightIcon className='hov-icon'/></span>
                                </li>
                                <li className='productLi relative'>

                                    <span className='addCartIcon hover-trigger' onClick={() => handleAddtoCart(item)}><span className='absolute hover-target'>Add to Cart</span><ShoppingCartIcon className='hov-icon'/></span>
                                </li>

                            </ul>
                        </div>
                        <div className='px-4 z-50 bg-white'>
                            <div className='flex items-center justify-between'>
                                <h2 className='font-titleFont tracking-wide text-lg text-amazon_blue font-medium'>{item.title.substring(0, 20)}</h2>
                                <p className='text-sm text-gray-600 font-semibold'>${item.price}</p>
                            </div>
                            <div>
                                <p className='text-sm mb-1'>{item.description.substring(0, 150)}...</p>
                                <div className='text-yellow-500'>
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>
                            </div>
                            <button  className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-b1 active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3' onClick={() => handleAddtoCart(item)}>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Products;