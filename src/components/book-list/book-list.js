import React, { Component } from "react";
import BookListItem from '../book-list-item/book-list-item';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withBookStoreService } from '../hoc';
import Spinner from "../spinner/spinner";
import { booksloaded } from '../../actions';
import { compose } from "../../utils";
import './book-list.css';
class BookList extends Component {

componentDidMount() {
    const { bookstoreService, booksloaded } = this.props;
    bookstoreService.getBooks()
    .then((data) => booksloaded(data));
}
    render() {
        const { books, loading } = this.props;

        if(loading) {
            return <Spinner />;
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

const mapStateToProps = ({books, loading}) => {
    return {books, loading};
    };

const mapDispatchToProps = {
    booksloaded
};

export default compose(
    withBookStoreService(), 
    connect(mapStateToProps, mapDispatchToProps))(BookList);