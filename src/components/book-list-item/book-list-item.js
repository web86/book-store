import React from "react";
import './book-list-item.css';
import {useDispatch} from "react-redux";
import {bookAddedToCart} from "../../actions";

const BookListItem = ({book}) => {
    const {id, title, author, price, coverImage} = book;
    const dispatch = useDispatch();
    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={coverImage} alt={title} />
            </div>
            <div className='book-details'>
                <span className='book-title'>{title}</span>
                <div className='book-author'>{author}</div>
                <div className='book-price'>${price}</div>
                <button onClick={()=>dispatch(bookAddedToCart(id))} className='btn btn-info add-to-cart'>Add to cart</button>
            </div>
        </div>
        );
};

export default BookListItem;