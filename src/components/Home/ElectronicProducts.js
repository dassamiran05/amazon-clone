import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from 'react-slick';
import './eletronic.css';

const ElectronicProducts = () => {
    const data = useLoaderData();
    const products = data.data;
    const elecProducts = products.filter(x => x.category === "electronics");
    console.log(products);



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }
        ]
    };

    return (
        <div className=' bg-white max-w-screen-2 grid grid-cols-1 gap-3 p-3 relative border-[1px] border-gray-200 slider-hovering'>
            <div className='flex gap-3 items-center'>
                <h3 className='text-2xl text-[#0F1111] font-titleFont font-bold'>Top selling products from small business</h3>
                <span className='text-sm text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer duration-100'>See all offers</span>
            </div>
            <Slider {...settings}>
                {
                    elecProducts.map(product => (
                        <div className='px-1.5'>
                            <div key={product.id} className="bg-[#f7f8f8] product-i h-[220px] items-center justify-center cursor-pointer shadow-none hover:shadow-testShadow duration-200">
                                <img src={product.image} alt={product.title} className="w-[58%] xl:w-[40%] h-auto object-contain" />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ElectronicProducts;