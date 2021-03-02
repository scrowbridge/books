import React, {Component} from 'react';
import './Posts.scss';
import Post from "../Post/Post";

export class Posts extends Component {

    render() {
        return (
            <div className="posts">
\                {this.props.posts.map((post) =>
                    <Post title={post.title.rendered} body={post.content.rendered} key={post.id}/>
                )}
            </div>
        ) // end return
    } // render
}
