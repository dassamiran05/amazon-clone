import React from 'react';
import Banner from '../components/Home/Banner';
import Products from '../components/Home/Products';

const Home = ({handleAddtoCart, handleDelete}) => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-full -mt-14 xl:-mt-36 py-10'>
                <Products handleAddtoCart={handleAddtoCart} handleDelete={handleDelete}></Products>
            </div>
            
        </div>
    );
};

export default Home;