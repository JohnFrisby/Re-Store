import React from 'react';
import './header.css';

const Header = ({numItems, total}) => {
    return(
        <header className="header row">
            <a className="logo text-dark" href="#">ReStore</a>
            <a className="shopping-cart" />
            <a> <i className="cart-icon fa fa-shoping-cart" />
                {numItems} item (${total})
            </a>
        </header>
    )
}

export default Header;