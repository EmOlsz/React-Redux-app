import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index.js';

class BookList extends Component {
    renderlist() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item"
                >{book.title}</li>
            );
        });
    };
    render() {
        return (
            <ul className="list-group col-md-4">
                {this.renderlist()}
            </ul>
        );
    };
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);