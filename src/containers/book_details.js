import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
    render() {
        if (!this.props.book) {
            return <h2>Select a book</h2>
        }
        return (
            <div>
                <h2>Details of book</h2>
                <p>Title: {this.props.book.title}</p>
                <p>Pages: {this.props.book.pages}</p>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails);