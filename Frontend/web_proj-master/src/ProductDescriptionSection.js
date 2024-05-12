import React, { useState } from 'react';
import './productDescription.css';

const ProductDescriptionSection = ({ product, setSelectedItems, selectedItems }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);

    const addItemToCart = () => {
        let updatedProduct = { ...product, size: selectedSize };
        if (!selectedItems.some(item => item.id === product.id && item.size === selectedSize)) {
            setSelectedItems(prevItems => [...prevItems, updatedProduct]);
        }
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className="main-containerDes">
            <div className={"img-card"}>
                <img src={product.imageSrc} alt={product.productName} className="ProductDescription-image"/>
            </div>
            <div className="description-area">
                <h2>{product.productName}</h2>
                {product.price && <p>price: {product.price}</p>}
                {product.category && <p>category: {product.category}</p>}
                <p>{product.description}</p>
                {product.sizes && (
                    <div className={"sizesButtons"}>
                        <p>Available Sizes:</p>
                        {product.sizes.map((size, index) => (
                            <button key={index} onClick={() => handleSizeClick(size)}>
                                {size}
                            </button>
                        ))}
                    </div>
                )}
                {selectedSize && <p>Selected Size: {selectedSize}</p>}
                <a href={"#.com"} onClick={addItemToCart}>Add to cart</a>
            </div>
        </div>
    );
};

export default ProductDescriptionSection;
