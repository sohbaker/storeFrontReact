import React from "react";
import "./Navbar.css";

const NavBar = props => {
    return (
        <div className="ui menu nav-container">
            <div className="header item nav-header">
                <span className="nav-flag" role="img" aria-label="Grenada">🇬🇩 </span> Nutmeg
            </div>
        </div>

    );
};

export default NavBar;
