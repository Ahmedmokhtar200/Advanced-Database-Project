import React from 'react';
import ProductHolder from './ProductHolder';
import './producthome.css'

const HomePage = ({ productsData, toggleSections, setClickedItem}) => {
    return (
        <div className="main-container">
                <ProductHolder products={productsData} toggleSections={toggleSections} setClickedItem={setClickedItem}></ProductHolder>
            </div>

    );
}

export default HomePage;
