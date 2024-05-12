import React from 'react';
import "./shippinginfo.css"
const Order = ({ orderData, street, city, country, phoneNumber, trackingNumber }) => {
    const totalSum = orderData.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.price * currentItem.quantity);
    }, 0);
    return (
        <div className="Order">
            <h2>Order Details:</h2>
            <p>Address: {street}, {city}, {country}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Tracking Number: {trackingNumber}</p>
            <p>Total price: {totalSum}</p>
            <h2>Products:</h2>
            {orderData.map((item, index) => (
                <div key={index} className={"order-products"}>
                    <img src={item.imageSrc} alt="Product" className="order-image"/>
                    <div>
                        <h3>{item.productName}</h3>
                        <p>{item.description}</p>
                        <p>price: {item.quantity*item.price}</p>
                        <p>size: {item.size}</p>
                        <p>quantity: {item.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Order;

