import React, { useState } from 'react';

export default function PriceSlider({ setSelectedPrice }) {
    const [value, setValue] = useState(1000); // Initial value

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setValue(selectedValue);
        setSelectedPrice(selectedValue); // Set the selected price using setSelectedPrice
    };

    return (
        <div>
            <label htmlFor="rangeSlider">MaxPrice:</label>
            <input
                type="range"
                className="Bar" // Use className instead of class for JSX
                name="rangeSlider"
                min="1"
                max="10000"
                value={value}
                onChange={handleChange}
            />
            <p>Selected value: {value}</p>
        </div>
    );
}
