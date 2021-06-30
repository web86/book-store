import React from "react";
import './shop-header.css';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const ShopHeader = () => {
    const {cartItems, orderTotal} = useSelector(state => state.shoppingCart);
    let countItems = 0;
    cartItems.forEach((item)=>{
        countItems += item.count
    });
    return (
        <header className='shop-header row'>
            <Link to='/'>
                <div className='logo text-dark' >ReStore</div>
            </Link>
            <Link to='/cart'>
                <div className='shopping-cart'>
                    <i className='fa fa-shopping-cart'/>
                    {countItems} items (${orderTotal})
                </div>
            </Link>
        </header>
    )
};
export default ShopHeader;