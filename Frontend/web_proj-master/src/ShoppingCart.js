import React, { useState, useEffect } from "react";
import "./cartstyle.css"
const ShoppingCart = ({ productsData, setClickedItem }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Update cartItems whenever productsData changes
        setCartItems(productsData.map(product => ({
            id: product.id,
            productName: product.productName,
            imageSrc: product.imageSrc,
            description: product.description,
            price: product.price,
            category: product.category,
            quantity: product.quantity,
            size:product.size
        })));
    }, [productsData]);

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity === 1) {
            // If quantity is 1, remove the item from cartItems
            newCartItems.splice(index, 1);
        } else {
            // Otherwise, decrement the quantity
            newCartItems[index].quantity--;
        }
        setCartItems(newCartItems);
        setClickedItem(newCartItems);
    };

    const increaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity++; // Increment the quantity of the item at the specified index
        setCartItems(newCartItems);
        setClickedItem(newCartItems);
    };
    const totalSum = cartItems.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.price * currentItem.quantity);
    }, 0);
    return (
        <div className={"main-container"}>
            <div className="shopping-cart">
                <h2>Order</h2>
                <div className="items">
                    {cartItems.length === 0 ? (
                        <h5>Your cart is empty</h5>
                    ) : (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className="item_inbox">
                                    <div className="item-content">
                                        <img src={item.imageSrc} alt={item.name} className="product-image"/>
                                        <span className="product-name">
                                            {item.productName} {item.quantity > 1 ? `x${item.quantity}` : ''}
                                            <p>Size: {item.size}</p>
                                        </span>
                                    </div>
                                    <div className="quantity-controls">
                                        <button onClick={() => increaseQuantity(index)}>+</button>
                                        <button id={"decButton"} onClick={() => removeFromCart(index)}>-</button>
                                        <p>Price {item.price * item.quantity} EGP</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    {totalSum > 0 && <h4>Total Price: {totalSum} EGP</h4>}
                </div>
            </div>
        </div>


    );
};

export default ShoppingCart;
