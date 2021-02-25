import React from 'react';
import PropTypes from 'prop-types';
import './Book.scss';

const Book = (props) => (
    <div className="Book">
        <h2>{props.title}</h2>
        <p dangerouslySetInnerHTML={{__html: props.body}} ></p>
        <p>{props.featured_media}</p>
    </div>
);

Book.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    featured_media: PropTypes.string,
};

Book.defaultProps = {
    title: "Book Title",
    body: "Book Body.",
    featured_media: "Book image",
};

export default Book;
