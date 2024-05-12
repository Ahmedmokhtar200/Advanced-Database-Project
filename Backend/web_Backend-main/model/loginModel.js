const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'must provide username'],
        unique:true,

    },
    password:{
        type:String,
        required:[true, 'must provide password'],

    }
})

module.exports = mongoose.model('login',LoginSchema)