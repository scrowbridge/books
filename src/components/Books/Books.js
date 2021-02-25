import React, {Component} from 'react';
import './Books.scss';
import Book from "../Book/Book";
import axios from "axios";

export class Books extends Component {
    booksEndpoint = 'https://scrowbridge.bitlampsites.com/wpd/final/wordpress/wp-json/wp/v2/book';
    picsEndpoint = 'https://scrowbridge.bitlampsites.com/wpd/final/wordpress/wp-json/wp/v2/media';

    state = {
        books: [

        ],

    }

    //run when the component is added to the page
    componentDidMount() {
        axios
            .get(this.booksEndpoint)
            .then((res) => {
                console.log('Response', res);
                //replace array in state
                this.setState({
                    books: res.data,
                    isLoaded: true,
                });
                axios
                    .get(this.picsEndpoint)
                    .then((res) => {
                        console.log('Response', res);
                        //replace array in state
                        this.setState({
                            pics: res.data.featured_media,
                            isLoaded: true,
                        });
                    })
                    .catch((err) => {
                        console.log('API error', err);
                    });
            })
            .catch((err) => {
                console.log('API error', err);
            });
    }

    render() {
        return (
            <div className="books">
                {this.state.isLoaded ? '' : <p>Loading...</p>}
                {this.state.books.map((book) =>
                    <Book title={book.title.rendered} body={book.content.rendered} key={book.id} featured_media={book.featured_media.rendered}/>
                )}
            </div>
        ) // end return
    } // render
}
