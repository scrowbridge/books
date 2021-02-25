import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

const Post = (props) => (
  <div className="Post">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
  </div>
);

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

Post.defaultProps = {
    title: "Post Title",
    body: "Post Body."
};

export default Post;
