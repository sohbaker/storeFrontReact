import React from "react";

const NavBar = props => {
    return (
        <div className="ui menu">
            <div className="header item">
                <span role="img" aria-label="Grenada">🇬🇩 </span> Nutmeg
            </div>
            <div className="item">
                <div className="ui positive basic button">
                    <i className="shop icon" test="icon-image" />
                </div>
            </div>
        </div>

    );
};

export default NavBar;
