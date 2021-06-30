import React from "react";
import { useSelector} from "react-redux";
import {useFetchBooks} from "../../actions";
import './book-list.css';
import BookListItem from "../book-list-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books}) => {
    return (
        <ul className='book-list'>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book}/></li>
                    )
                })
            }
        </ul>
    )
};

const BookListContainer = () => {

    useFetchBooks(); // Получаем данные

    const {books, loading, error} = useSelector(state => state.bookList);
    // получаем данные из обновленного state

    if (loading) {
        return <Spinner/>
    }
    if (error) {
        return <ErrorIndicator/>
    }
    return <BookList books={books}/>
};

export default BookListContainer;