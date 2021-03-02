import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Link from '@material-ui/core/Link';

const Post = (props) => (

      <GridListTile>
          <GridListTile key="Subheader" cols={6} style={{ height: 'auto' }}>
              <img src={props.featuredMedia} alt={props.title} />
              <GridListTileBar
                  title={<Link href={props.link} target="_blank">{props.title}</Link>}

                      subtitle={<span>by: {props.author}</span>}

                  actionIcon={<Link href={props.description} target="_blank">
                      <img src={props.authorImg} alt={props.author} className="authorImg" />
                  </Link>
                  }
              />
          </GridListTile>
      </GridListTile>

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
