import {useContext, useEffect} from "react";
import Context from "../components/context";
import {useDispatch} from "react-redux";

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    };
};
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};
const booksError = (err) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: err
    };
};
const bookAddedToCart = (bookId) => {
  return {
      type: 'BOOK_ADDED_TO_CART',
      payload: bookId
  };
};
const deleteBookFromCart = (bookId) => {
    return {
        type: 'DELETE_ALL_BOOKS_FROM_CART',
        payload: bookId
    };
};
const decreaseBookInCart = (bookId) => {
    return {
        type: 'DECREASE_BOOK_IN_CART',
        payload: bookId
    };
};

const changeTotalOrder = (finalAmount) => {
    return {
        type: 'CHANGE_TOTAL_ORDER_IN_CART',
        payload: finalAmount
    };
};

const useFetchBooks = () => {
    const bookstoreService = useContext(Context); // получаем данные из контекста "типа с сервера"
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(booksRequested()); // возвращаем loading в true и обнуляем books в []
        bookstoreService.getBooks()
            .then((data) => dispatch(booksLoaded(data)))
            .catch((err) => dispatch(booksError(err)));
    }, [bookstoreService, dispatch]) // полученные данные с сервиса передаем в state redux только 1 раз
};

export {
    useFetchBooks, bookAddedToCart, deleteBookFromCart, decreaseBookInCart, changeTotalOrder
};