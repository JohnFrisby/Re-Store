import React, { Component } from "react";
import BookListItem from '../book-list-item/book-list-item';
import { connect } from "react-redux";

import { withBookStoreService } from '../hoc';
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import { booksloaded, booksRequested, booksError } from '../../actions';
import { compose } from "../../utils";
import './book-list.css';
class BookList extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }
        else if (error) {
            return <ErrorIndicator />;
        }
        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: () => {
            dispatch(booksRequested());
            bookstoreService.getBooks()
                .then((data) => dispatch(booksloaded(data)))
                .catch((err) => dispatch(booksError(err)));
        }
    }
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookList);