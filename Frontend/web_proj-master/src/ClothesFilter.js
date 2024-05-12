import React, { useState, useEffect } from 'react';

function ClothesFilter({ types, handleTypeChange }) {
    const [selectedTypes, setSelectedTypes] = useState([]);

    useEffect(() => {
        handleTypeChange(selectedTypes);
    }, [selectedTypes, handleTypeChange]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedTypes([...selectedTypes, value]);
        } else {
            setSelectedTypes(selectedTypes.filter(type => type !== value));
        }
    };

    return (
        <div>
            <b>Clothes Types:</b>
            {types.map(type => (
                <div key={type} className={"cloths_filter_items"}>
                    <label className={"filter_label"} htmlFor={type}>{type}</label>
                    <input
                        className={"filter_checkbox"}
                        type="checkbox"
                        id={type}
                        name={type}
                        value={type}
                        checked={selectedTypes.includes(type)}
                        onChange={handleCheckboxChange}
                    />
                </div>
            ))}
        </div>
    );
}

export default ClothesFilter;
