import { useState } from "react";
import axios from "axios";

export default function AdminRemovePage({ productsData, setproductsData}) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const admin_URL = 'http://localhost:3030/admin';

    const handleProductSelectChange = (event) => {
        const productId = event.target.value;
        const product = productsData.find(product => product.id === productId);
        console.log(productId)
        console.log(product)
        setSelectedProduct(product);
    };

    const handleRemoveButtonClick = async (e) => {
        e.preventDefault();
        if (selectedProduct) {
            const adminRemoveURL = admin_URL+'/removeItem'
            const response = await axios.post(adminRemoveURL, {
                name: selectedProduct.productName // Send the product name as identifier
            });
            console.log(response)
            if (response.status === 200 && response.data.success) {


                const updatedProductsData = productsData.filter(product => product.id !== selectedProduct.id);

                // Update the state with the filtered array
                setproductsData(updatedProductsData);

                console.log(`Removing product: ${selectedProduct.productName}`);
                // Reset the selected product
                setSelectedProduct(null);
            }
        }
    };

    return (
        <div>
            <form className="adminRemoveForm">
                <label htmlFor="productName">Select Product:</label>
                <select
                    id="productName"
                    value={selectedProduct ? selectedProduct.id : ''}
                    onChange={handleProductSelectChange}
                >
                    <option value="">Select a product...</option>
                    {productsData.map(product => (
                        <option key={product.id} value={product.id}>
                            {product.productName}
                        </option>
                    ))}
                </select>
                {selectedProduct && (
                    <div className="adminRemoveImage">
                        <img src={selectedProduct.imageSrc} alt="Product Image" />
                    </div>
                )}
                <button
                    className="adminRemoveButton"
                    type="button"
                    onClick={handleRemoveButtonClick}
                    disabled={!selectedProduct}
                >
                    Confirm Removal
                </button>
            </form>
        </div>
    );
}
