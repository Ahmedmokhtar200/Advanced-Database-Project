import React, {useEffect, useState} from 'react';
import ShoppingCart from "./ShoppingCart";
import Order from "./Order";
import "./shippinginfo.css"
import axios from "axios";

const Cart = ({ productsData, setClickedItem, setOrders, orders, loginName, productsDataFull}) => {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const user_URL = 'http://localhost:3030/order/';


    useEffect(() => {
        const getAllOrders = async () => {
            try {
                setOrders([])
                const getOrderURL = user_URL +loginName;
                const response = await axios.get(getOrderURL, loginName);
                console.log(response.data)
                const newOrders = response.data.map(order => {
                    setOrders([])
                    return {
                        userID: order.loginName,
                        street: order.street,
                        city: order.city,
                        country: order.country,
                        phoneNumber: order.phoneNumber,
                        trackingNumber: order._id,
                        orderData: order.orderData.map(item => {
                            // Map over each item in the orderData array
                            const product = productsDataFull.find(product => product.id === item.productId);
                            // Find the product in productsData array based on productId
                            console.log(productsDataFull)
                            if (product) {
                                console.log(product)
                                // If the product is found, update its quantity
                                return {
                                    id: item.productId,
                                    quantity: item.quantity,
                                    imageSrc: product.imageSrc,
                                    productName: product.Name,
                                    description: product.description,
                                    price: product.price,
                                    category: product.category,
                                    size: item.size
                                };
                            } else {
                                // If the product is not found, return the item as it is
                                return item;
                            }
                        })
                    };
                });
                setOrders(prevOrders => [...prevOrders, ...newOrders]);

                //use setOrders to edit the array of orders
            } catch (error) {
                console.error('Error:', error);
            }
        };

        // Call the function when the component mounts
        getAllOrders();
    }, []);

    const handelOrder = async (e) => {
        e.preventDefault();
        try {
            const newOrder = {
                userID: loginName,
                street: street,
                city: city,
                country: country,
                phoneNumber: phoneNumber,
                orderData: productsData
            };

            // Additional logic for handling the order submission
            const orderURI = user_URL+"/";
            const orderData = productsData.map(item => [item.id, item.quantity, item.size]);
            const response = await axios.post(orderURI, {loginName,orderData,city,country,street,phoneNumber});
            if (response.status === 200) {
                setOrders([...orders, newOrder]);
                setClickedItem([]);
            }
            else alert("Order Failed")
        } catch (error) {
            console.error('Error:', error);
            // Handle other errors (e.g., network issues)
            // Optionally, you can display a generic error message to the user
        }
    };
    // const handelOrder = () => {
    //     const newOrder = {
    //         street: street,
    //         city: city,
    //         country: country,
    //         phoneNumber: phoneNumber,
    //         orderData: productsData,
    //         trackingNumber: generateRandomNumbers()
    //     };
    //     setOrders([...orders, newOrder]);
    //     setClickedItem([]);
    //     // Additional logic for handling the order submission
    // };

    return (
        <div className="container">
            <div className="item" id="products">
                <ShoppingCart productsData={productsData} setClickedItem={setClickedItem}/>
            </div>

            <div className="item" id="shippingDiv">
                <div className="shipping">
                    <h2>Shipping Information</h2>
                    <label className={"shippingInfoLabel"} htmlFor={"street"}>Street:</label>
                    <input className={"input"} type="text" name={"street"} value={street} placeholder={"Street Name/No."} onChange={(e) => setStreet(e.target.value)}/>

                    <label className={"shippingInfoLabel"} htmlFor={"city"}>City:</label>
                    <input className={"input"} type="text" name={"city"} placeholder={"City Name"} value={city} onChange={(e) => setCity(e.target.value)}/>

                    <label className={"shippingInfoLabel"} htmlFor={"country"}>Country:</label>
                    <input className={"input"} type="text" name={"country"} placeholder={"Country Name"} value={country} onChange={(e) => setCountry(e.target.value)}/>

                    <label className={"shippingInfoLabel"} htmlFor={"phoneNumber"}>Phone Number:</label>
                    <input className={"input"}  type="text" name={"phoneNumber"} placeholder={"+20123457891"} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>

                    <input id={"submitButton"} type="submit" onClick={handelOrder}/>
                </div>
            </div>
            {orders.length > 0 && (
                <div className="item" id="orders">
                    {orders.map((order, index) => (
                        <div key={index} className="order">
                            <h3>Order {index + 1}</h3>
                            <Order
                                orderData={order.orderData}
                                city={order.city}
                                country={order.country}
                                phoneNumber={order.phoneNumber}
                                street={order.street}
                                trackingNumber={order.trackingNumber}
                            />
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default Cart;
