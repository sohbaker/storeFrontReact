import React from "react";
import "./Navbar.css";

const NavBar = props => {
    return (
        <div className="ui menu nav-container">
            <div className="header item nav-header">
                <span className="nav-flag" role="img" aria-label="Grenada">🇬🇩 </span> Nutmeg
            </div>
            <div className="item nav-cart-icon">
                <div>
                    <button className="nav-cart-button">
                        <i className="shop icon big" test="icon-image" />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default NavBar;
