import React from 'react';
import Banner from '../components/Home/Banner';
import ElectronicProducts from '../components/Home/ElectronicProducts';
import Products from '../components/Home/Products';
import WomanCloth from '../components/Home/WomanCloth';

const Home = ({handleAddtoCart, handleDelete}) => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-full -mt-14 xl:-mt-36 py-10'>
                <Products handleAddtoCart={handleAddtoCart} handleDelete={handleDelete}></Products>
            </div>
            <div className='w-full mt-0 mb-4 px-4'>
                <ElectronicProducts></ElectronicProducts>
            </div>
            <div className='w-full mt-0 mb-4 px-4'>
                <WomanCloth></WomanCloth>
            </div>
            
        </div>
    );
};

export default Home;