import React, {Component} from 'react';
import axios from "axios";
import { Button, TextField } from '@material-ui/core';

export class SearchPosts extends Component {
    postsEndpoint = 'https://scrowbridge.bitlampsites.com/wpd/final/wordpress/wp-json/wp/v2/pages';

    state = {
        search: '',
    }

    //run when the component is added to the page
    getPosts() {
        axios
            .get(this.postsEndpoint, {
                params: {
                    search: this.state.search,
                    per_page: 12,
                }
        })
            .then((res) => {
                console.log('Response', res);

                // return posts to the app/parent
                // (onSearchResult() is passed in from app as a prop)
                this.props.onSearchResult(res.data);
            })
            .catch((err) => {
                console.log('API error', err);
            });
    }

    handleSubmit(event){
        event.preventDefault();

        //only search if we have something to search on
        if(this.state.search) {
            this.getPosts();
        }
    }

    render() {
        return (
            <form className="Search" onSubmit={(event) => this.handleSubmit(event)}>
                <TextField
                    label="Search..."
                    value={this.state.search}
                    onChange={(event) => this.setState({search: event.target.value})}
                />
                <Button color="primary" variant="contained" onClick={() => this.getPosts()} type="submit">Get Posts</Button>

            </form>
        ) // end return
    } // render
}
