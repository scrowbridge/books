import React from 'react';
import PropTypes from 'prop-types';
import './Book.scss';

const Book = (props) => (
    <div className="Book">
        <h2>{props.title}</h2>
        <p dangerouslySetInnerHTML={{__html: props.body}} ></p>
    </div>
);

Book.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

Book.defaultProps = {
    title: "Book Title",
    body: "Book Body."
};

export default Book;
