import React, {useState} from 'react';
import SearchSection from './SearchSection';
import ProductHolder from './ProductHolder';
import './searchScreen.css'

const SearchPage = ({
                        showSearchSection,
                        showProductSection,
                        productsData,
                        toggleSearchSections,
                        setClickedItem,
                        toggleProductDescriptionSection}) => {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(1000);

    const filteredProducts = productsData.filter(product => {
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.category);
        const priceMatch = product.price <= selectedPrice;
        return typeMatch && priceMatch;
    });
    return (
        <div className="mainSearch-container">
            {showSearchSection && <SearchSection className={"search-search-screen"} setSelectedTypes={setSelectedTypes} setSelectedPrice={setSelectedPrice}/>}
            {showProductSection && (
                <div className={"product-search-screen"}>
                <ProductHolder products={filteredProducts} toggleSections={toggleProductDescriptionSection} setClickedItem={setClickedItem}></ProductHolder>
                </div>
            )}
        </div>
    );
}

export default SearchPage;
