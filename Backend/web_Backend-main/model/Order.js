const mongoose = require('mongoose');

const Order = mongoose.Schema({
    loginName:{type:String, required:true},
    orderData: [
        {
          productId:{
                type:String, 
                required:true
            },
            quantity: {
                type: Number,
                default: 1,
            },
            size: {
                type: String,
                default: true,
            },
        }
        
    ],
    city:{type:String},
    country:{type:String},
    street:{type:String},
    phoneNumber:{type:Number}
})

module.exports = mongoose.model('Order',Order)