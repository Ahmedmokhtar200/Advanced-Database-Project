import { useState } from "react";
import './AdminPage.css';
import axios from "axios";
import downloadImage from "./hoddie.jpg";

export default function AdminAddPage({productsData, setproductsData}) {
    const [imageSelected, setImageSelected] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [sizes, setSizes] = useState([]);
    const admin_URL = 'http://localhost:3030/admin';


    const handleSubmitClick = async (e) => {
        e.preventDefault();
        try {
            // Submit product details including sizes
            const name = document.getElementById('Name').value;
            const price = document.getElementById('Price').value;
            const description = document.getElementById('Description').value;
            const category = document.getElementById('Category').value;
            const sizes = document.getElementById('Sizes').value;
            const imageUrl =document.getElementById("ImageUrl").value;
            console.log(imageUrl)
            const addItemURL = admin_URL + "/addItem"
            const response = await axios.post(addItemURL, { name, price, description, category, sizes, imageUrl});
            console.log(response);
            if (response.status === 200 && response.data) {
                // Update productsData state with the new item data
                const id = response.data.account._id
                const data = { id: id, imageSrc: imageUrl, productName: name ,
                    description: description, quantity: 0, price:price,
                    category:category, sizes: sizes.split(","), size:undefined}
                setproductsData(prevProductsData => [...prevProductsData, data]);
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle other errors (e.g., network issues)
            // Optionally, you can display a generic error message to the user
        }
    };


    return (
        <div>
            <form action="submit_product.php" method="POST" className="adminAddingForm">
                <label htmlFor="Name">Name:</label>
                <input type="text" name="Name" id="Name" required placeholder="Name..."/>

                <label htmlFor="Price">Price:</label>
                <input type="number" name="Price" id="Price" required placeholder="Price..."/>

                <label htmlFor="Description">Description:</label>
                <input type="text" name="Description" id="Description" required placeholder="Description..."/>

                <label htmlFor="Category">Category:</label>
                <input type="text" name="Category" id="Category" required placeholder="Category..."/>

                <label htmlFor="Sizes">Sizes (comma-separated):</label>
                <input type="text" name="Sizes" id="Sizes" placeholder="Sizes..."/>

                <label htmlFor="ImageUrl">Image URL:</label>
                <input
                    type="text"
                    name="ImageUrl"
                    id="ImageUrl"
                    placeholder="Enter image URL..."
                />

                <button className="adminAddButton" type="button" onClick={handleSubmitClick}>
                    Submit
                </button>
            </form>
        </div>
    );
}
