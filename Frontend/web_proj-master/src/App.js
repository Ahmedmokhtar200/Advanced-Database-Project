    import React, {useEffect, useState} from 'react';
    import TopSection from './TopSection';
    import HomePage from './HomePage';
    import downloadImage from './hoddie.jpg';
    import downloadImage2 from './OIP.jpg';
    import ContactSection from './ContactSection';
    import SearchPage from "./SearchPage";
    import Cart from "./Cart";
    import ProductDescriptionSection from "./ProductDescriptionSection";
    import Login from "./Login";
    import Register from "./Register";
    import AdminPage from "./AdminPage";
    import axios from "axios";
    const user_URL = 'http://localhost:3030/user';

    function App() {


        const [productsData, setproductsData] = useState([]);

        useEffect(() => {
            const getAllItems = async () => {
                try {
                    const getItemsURL = user_URL + "/getAllItems";
                    const response = await axios.get(getItemsURL);
                    console.log(response.data);
                    const arr = response.data.allItems; // Accessing the array of items
                    if (!Array.isArray(arr)) {
                        console.error("Array of items not found in response data");
                        return; // Exit the function if array of items is not found
                    }
                    let idCounter = 0;
                    const newProductsData = arr.map(item => ({
                        id: item._id, // Use item id instead of productsData.length
                        imageSrc: item.Image,
                        productName: item.Name,
                        description: item.Description,
                        quantity: 0,
                        price: item.Price,
                        category: item.Category,
                        sizes: item.Sizes.split(","),
                        size: undefined
                    }));
                    setproductsData(newProductsData);
                    console.log(productsData)
                } catch (error) {
                    console.error('Error:', error);
                    // Handle other errors (e.g., network issues)
                    // Optionally, you can display a generic error message to the user
                }
            };

            // Call the function when the component mounts
            getAllItems();
        }, []);





        const [orders, setOrders] = useState([]);
        const [clickedItem, setClickedItem] = useState([]);
        const [selectedItems, setSelectedItems] = useState([]);
        const [showSearchSection, setSearchSection] = useState(false);
        const [showProductSection, setProductSection] = useState(false);
        const [showHomeSection, setHomeSection] = useState(true);
        const [showProductDescriptionSection, setProductDescriptionSection] = useState(false);
        const [showCartSection, setCartSection] = useState(false);
        const [showContactSection, setContactSection] = useState(false);
        const [showAdmin, setShowAdmin] = useState(false);
        const [showLogin , setLogin] = useState(false);
        const [showRegister , setRegister] = useState(false);
        const [showLoginButtons , setLoginButtons] = useState(false);
        const [loginName , setloginName] = useState(undefined);
        const toggleOff = (show) => {
            setCartSection(!show);
            setProductDescriptionSection(!show);
            setSearchSection(!show);
            setProductSection(!show);
            setHomeSection(!show);
            setLogin(!show);
            setRegister(!show)
            setContactSection(!show);
            setShowAdmin(!show);
        }
        const toggleLogin =(show) => {
            toggleOff(show);
            setLogin(show);
        }

        const toggleRegister =(show) => {
            toggleOff(show);
            setRegister(show);
        }

        const toggleAdminPage = (show) => {
            toggleOff(show);
            setShowAdmin(show);
        }

        const toggleSearchSections = (show)=> {
            toggleOff(show);
            setSearchSection(show);
            setProductSection(show);
        };
        const toggleHomeSearchSections = (show) => {
            toggleOff(show);
            setHomeSection(show);
        };
        const toggleProductDescriptionSection = (show) => {
            toggleOff(show);
            setProductDescriptionSection(show);
        };
        const toggleCartSection = (show) =>{
            toggleOff(show);
            setCartSection(show);
        };
        const toggleContactSection = (show) =>{
            toggleOff(show);
            setContactSection(show);
        };

        return (
            <>
                <div>
                    <TopSection toggleSections={toggleSearchSections} toggleHomeSearchSections={toggleHomeSearchSections} toggleCartSection={toggleCartSection}
                                toggleContactSection={toggleContactSection} toggleLogin={toggleLogin} showLoginButtons={showLoginButtons}
                                loginName={loginName} setLoginButtons={setLoginButtons} setloginName={setloginName}/>
                </div>
                <div className={"test1"}>
                    <div>
                        <SearchPage showSearchSection={showSearchSection} showProductSection={showProductSection}
                                    productsData={productsData}
                                    toggleSearchSections={toggleSearchSections}
                                    toggleProductDescriptionSection={toggleProductDescriptionSection}
                                    setClickedItem={setClickedItem}>
                        </SearchPage>
                    </div>
                    <div>
                        {showHomeSection && (
                            <HomePage productsData={productsData} toggleSections={toggleProductDescriptionSection}
                                      setClickedItem={setClickedItem}></HomePage>)}
                    </div>
                    <div>
                    {showProductDescriptionSection &&
                            <ProductDescriptionSection product={clickedItem} setSelectedItems={setSelectedItems}
                                                       selectedItems={selectedItems}></ProductDescriptionSection>}
                    </div>
                    <div>
                        {showCartSection && (
                            <Cart productsData={selectedItems} setClickedItem={setSelectedItems} setOrders={setOrders}
                                  orders={orders} loginName={loginName} productsDataFull={productsData}></Cart>)}
                    </div>
                    <div>
                        {showContactSection && (
                            <ContactSection></ContactSection>)}
                    </div>
                    <div>
                        {showLogin && <Login toggleRegister={toggleRegister} toggleAdminPage={toggleAdminPage}
                                             setLoginButtons={setLoginButtons} setloginName={setloginName}/>}
                    </div>
                    <div>
                        {showRegister && <Register toggleLogin={toggleLogin} setLoginButtons={setLoginButtons}
                                                   setloginName={setloginName} toggleHomeSearchSections={toggleHomeSearchSections}/>}
                    </div>
                    <div>
                        {showAdmin && (<AdminPage productsData={productsData} productsData={productsData}
                                                  setproductsData={setproductsData}></AdminPage>)}
                    </div>
                </div>
            </>
        );
    }

    export default App;
