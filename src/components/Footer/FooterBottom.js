import React from 'react';

const FooterBottom = () => {
    return (
        <div className='w-full bg-footerBottom py-8 md:px-10'>
            <div className='max-w-5xl mx-auto'>
                <div className='w-full grid grid-cols-3 md:grid-cols-5  gap-3 place-content-center text-gray-400'>
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col gap-1 group'>
                            <h3 className="footerBottomTitle">AbeBooks</h3>
                            <p className="footerBottomText">Books, art & collectibles</p>
                        </div>
                        <div className='flex flex-col gap-1 group'>
                            <h3 className="footerBottomTitle">Shopbop</h3>
                            <p className="footerBottomText">Designer Fashion Brands</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col gap-1 group'>
                            <h3 className="footerBottomTitle">Amazon Web Services</h3>
                            <p className="footerBottomText">Scalable Cloud Computing Services</p>
                        </div>
                        <div className='flex flex-col gap-1 group'>
                            <h3 className="footerBottomTitle">Amazon Business</h3>
                            <p className="footerBottomText">Everything For Your Business</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col gap-1 group'>
                            <h3 className="footerBottomTitle">Audible</h3>
                            <p className="footerBottomText">Download Audio Books</p>
                        </div>
                        <div className='flex flex-col gap-1 group'>
                            <h3 className="footerBottomTitle">Prime Now</h3>
                            <p className="footerBottomText">2-Hour Delivery on Everyday Items</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col gap-1 group'>
                            <h3 className="footerBottomTitle">DPReview</h3>
                            <p className="footerBottomText">Digital Photography</p>
                        </div>
                        <div className='flex flex-col gap-1 group'>
                            <h3 className="footerBottomTitle">Amazon Prime Music</h3>
                            <p className="footerBottomText">90 million songs, ad-free Over 15 million podcast episodes</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col gap-1 group'>
                            <h3 className="footerBottomTitle">IMDb</h3>
                            <p className="footerBottomText">Movies, TV & Celebrities</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;