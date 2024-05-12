const express = require('express')
const app = express()
const item = require('../model/itemModel');


const addItem = async (req, res) => {
    try {
        const data = {
            Name: req.body.name,
            Price: req.body.price,
            Description: req.body.description,
            Category: req.body.category,
            Sizes: req.body.sizes,
            Image: req.body.imageUrl,

        };
        console.log(data);
        const account = await item.create(data);
        console.log(account)
        res.status(200).json({account});

    } catch (error) {
        console.log(error);
        res.status(400).json('error2');
    }
};

const removeItem = async (req, res) => {
    try {
        const filter = { Name: req.body.name }; // Use any unique identifier to find the item to delete
        console.log(filter)
        const result = await item.findOneAndDelete(filter);

        if (result) {
            // Item found and deleted successfully
            res.status(200).json({ success: true });
        } else {
            // Item not found
            res.status(200).json({ success: false });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error: error.message });
    }

};

module.exports = {
    addItem,
    removeItem
}