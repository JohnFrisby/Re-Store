import React, { Component } from "react";
import BookListItem from '../book-list-item/book-list-item';

import { connect } from "react-redux";

import { withBookStoreService } from '../hoc';
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from "../../utils";
import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                        <BookListItem 
                            book={book}
                            onAddedToCart={() => onAddedToCart(book.id)} /></li>
                    );
                })
            }
        </ul>
    );
};

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        const { books, loading, error, onAddedToCart} = this.props;

        if (loading) {
            return <Spinner />;
        }
        else if (error) {
            return <ErrorIndicator />;
        } 
        return <BookList books={books} onAddedToCart={onAddedToCart}/>;
    }
}

const mapStateToProps = ({ BookList: {books, loading, error} }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    };
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookListContainer);