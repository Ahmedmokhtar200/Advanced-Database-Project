// TopSection.js
import React from "react";
import './Nav.css'
import titleImage from "./WebLogo.png";
export default function TopSection({ toggleSections, toggleHomeSearchSections, toggleCartSection ,toggleContactSection, toggleLogin, showLoginButtons, loginName, setLoginButtons, setloginName}) {
    const handleSearchButtonClick = ()=> {
        toggleSections(true); // Show both search and product sections
    };

    const handleHomeButtonClick = () => {
        toggleHomeSearchSections(true); // Hide both search and product sections
    };
    const handleCartButtonClick = () => {
        if (loginName !== undefined) {
            toggleCartSection(true); // Hide both search and product sections
        }
        else {
            toggleLogin(true);
        }
    };
    const handleContactusButtonClick = () => {
        toggleContactSection(true);
    };
    const handleLoginButtonClick = () => {
        toggleLogin(true);
    }
    const handleLoginNameClick = () => {
        setLoginButtons(false); // Set showLoginButtons to false when login name is clicked
        setloginName(undefined)
    };

    return (
        <>
    <nav>
    <div className={"nav-container"}>
        <div className={"nav-display-flex justify-content align-center" }>
            <div className={"nav-display-flex align-center"}>
                <a href={"#.com"} onClick={handleHomeButtonClick}>
                <img src={titleImage} alt="Placeholder Logo"/>
                </a>

            </div>
            <ul className={"nav-display-flex align-center justify-content"}>
                <li><a href={"#.com"} onClick={handleSearchButtonClick}>Search</a></li>
                <li><a href={"#.com"} onClick={handleCartButtonClick}>Cart</a></li>
                <li><a href={"#.com"} onClick={handleContactusButtonClick}>Contact us</a></li>
                {showLoginButtons ? (
                    <li><a href={"#.com"} onClick={handleLoginNameClick}>{loginName}</a></li>
                ) : (
                    <li><a href={"#.com"} onClick={handleLoginButtonClick}>Login</a></li>
                )}
            </ul>
        </div>
    </div>
    </nav>


        </>
    );
}
