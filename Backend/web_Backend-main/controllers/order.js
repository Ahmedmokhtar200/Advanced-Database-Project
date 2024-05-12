const Order = require('../model/Order')

const getOrders = async (req,res) =>{
    console.log(req.params.id)
    try {
        //userid
        const orders = await Order.find({ loginName: req.params.id });
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createOrder = async(req,res)=>{
    console.log(req.body)
    try {
        const { loginName, orderData, city, country, street, phoneNumber} = req.body;
        const newOrder = new Order({
            loginName: loginName,
            orderData: orderData.map(([productId, quantity, size]) => ({ productId, quantity, size})),
            city: city,
            country: country,
            street: street,
            phoneNumber: phoneNumber
        });
        const savedOrder = await Order.create(newOrder);
        res.status(200).json(savedOrder)   
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

// getallorder by id 
// 
module.exports = {
    getOrders,
    createOrder,

}