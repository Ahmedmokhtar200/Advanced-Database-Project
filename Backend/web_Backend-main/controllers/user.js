const express = require('express')
const app = express()
const item = require('../model/itemModel');


const getAllItems = async (req, res) => {
    try {
        // Use the find() method on the item model to retrieve all items
        const allItems = await item.find();
        console.log(allItems)
        res.status(200).json({ allItems });
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error; // Forward the error to the caller
    }
};

module.exports = {
    getAllItems
}