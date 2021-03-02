import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';


//<p dangerouslySetInnerHTML={{__html: props.body}} ></p>
const Post = (props) => (

      <GridListTile>
          <GridListTile key="Subheader" cols={6} style={{ height: 'auto' }}>
              <ListSubheader component="div">{props.title}</ListSubheader>
              <img src={props.featuredMedia} alt={props.title} />
              <GridListTileBar
                  title={props.author}
                  subtitle={<span>by: {props.author}</span>}
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
