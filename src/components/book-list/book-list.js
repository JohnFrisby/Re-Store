import React, { Component } from "react";
import BookListItem from '../book-list-item/book-list-item';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withBookStoreService } from '../hoc';
import { booksloaded } from '../../actions';
import { compose } from "../../utils";
import './book-list.css';
class BookList extends Component {

componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    console.log(data);

    this.props.booksloaded(data);
}
    render() {
        const { books } = this.props;
        return (
            <ul>
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

const mapStateToProps = ({books}) => {
    return {books};
    };

const mapDispatchToProps = {
    booksloaded
};

export default compose(
    withBookStoreService(), 
    connect(mapStateToProps, mapDispatchToProps))(BookList);