const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'must provide name'],
    },
    Price: {
        type: Number,
        required: [true, 'must provide price'],
    },
    Description: {
        type: String,
        required: [true, 'must provide description'],
    },
    Category: {
        type: String,
        required: [true, 'must provide category'],
    },
    Sizes: String, // Assuming sizes is an array of strings
    Image: {
        type: String,
        validate: {
            validator: function(value) {
                // Regular expression for URL validation
                const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
                return urlRegex.test(value);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    }
});

module.exports = mongoose.model('item', ItemSchema);
