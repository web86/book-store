import React, {useEffect} from "react";
import './shopping-cart-table.css';
import {useDispatch, useSelector} from "react-redux";
import {bookAddedToCart, deleteBookFromCart, decreaseBookInCart, changeTotalOrder} from "../../actions";


const ShoppingCartTable = () => {

    const {cartItems, orderTotal} = useSelector(state => state.shoppingCart);
    // console.log('shoppingCart: ',cartItems.length)

    const dispatch = useDispatch();

    useEffect(()=>{
        let finalAmount = 0;
        cartItems.forEach((book)=>{
            finalAmount += book.total
        });
         dispatch(changeTotalOrder(finalAmount));
    },[cartItems, dispatch]);

    const renderRow = (item, idx) => {
        const {id, title, count, total} = item;
        return (
            <tr key={id}>
            <td>{idx + 1}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>${total}</td>
            <td>
                <button onClick={()=>dispatch(bookAddedToCart(id))} className='btn btn-outline-success btn-small'>
                    <i className='fa fa-plus-circle'/>
                </button>
                <button onClick={() => dispatch(decreaseBookInCart(id))} className='btn btn-outline-warning btn-small'>
                    <i className='fa fa-minus-circle'/>
                </button>
                <button onClick={() => dispatch(deleteBookFromCart(id))} className='btn btn-outline-danger btn-small'>
                    <i className='fa fa-trash-o'/>
                </button>
            </td>
        </tr>
        );
    };

    return (
        <div className='shopping-cart-table'>
            <h2>Your order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(renderRow)}
                </tbody>
            </table>
            <div className='total'>
                Total: ${orderTotal}
            </div>
        </div>
    );
};

export default ShoppingCartTable;