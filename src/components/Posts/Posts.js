import React, {Component} from 'react';
import './Posts.scss';
import Post from "../Post/Post";

export class Posts extends Component {
    state = {
        posts: [
            {title: 'Dream One', body: 'I dreamt about Meatboo'},
            {title: 'Dream Two', body: 'I dreamt about Nana'},
        ],

    }

    render() {
        return (
            <div className="posts">
                {this.state.posts.map((post) =>
                    <Post title={post.title} body={post.body}/>
                )}
            </div>
        ) // end return
    } // render
}
