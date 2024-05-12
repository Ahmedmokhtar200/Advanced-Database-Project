import './App.css'
import React from 'react';
import Product from './Product';

const ProductHolder = ({ products, toggleSections, setClickedItem}) => {
    return (
        <div className="product-holder">
            {products.map((product, index) => (
                <Product key={index} id={product.id} imageSrc={product.imageSrc} productName={product.productName}
                         description={product.description} toggleSections={toggleSections}
                         setClickedItem={setClickedItem} quantity={product.quantity} price={product.price} category={product.category}
                         sizes={product.sizes}
                />
            ))}
        </div>
    );
};

export default ProductHolder;



