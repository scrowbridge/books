import React, {Component} from 'react';
import './Posts.scss';
import Post from "../Post/Post";
import axios from "axios";

export class Posts extends Component {
    postsEndpoint = 'https://scrowbridge.bitlampsites.com/wpd/final/wordpress/wp-json/wp/v2/pages';
    state = {
        posts: [

        ],

    }

    //run when the component is added to the page
    componentDidMount() {
        axios
            .get(this.postsEndpoint)
            .then((res) => {
                console.log('Response', res);
                    //replace array in state
                this.setState({
                    posts: res.data,
                    isLoaded: true,
                });
            })
            .catch((err) => {
                console.log('API error', err);
            });
    }

    render() {
        return (
            <div className="posts">
                {this.state.isLoaded ? '' : <p>Loading...</p>}
                {this.state.posts.map((post) =>
                    <Post title={post.title.rendered} body={post.content.rendered} key={post.id}/>
                )}
            </div>
        ) // end return
    } // render
}
