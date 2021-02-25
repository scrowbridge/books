import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Book.scss';
import axios from "axios";


export class Book extends Component {

    state = {
        pics: [],
        isLoaded: false,
    }

    componentDidMount() {
        axios
            .get(this.props.featured_media)
            .then((res) => {
                console.log('Response', res);
                //replace array in state
                this.setState({
                    pics: res.data.source_url,
                    isLoaded: true,
                });
            })
            .catch((err) => {
                console.log('API error', err);
            });
    }

    render() {
        return (
            <div className="Book">
                 <h2>{this.props.title}</h2>
                 <p dangerouslySetInnerHTML={{__html: this.props.body}}></p>
                 <p><img src={this.state.pics}/></p>
            </div>
        ) // end return
    }



}


//const Book = (props) => (
 //   <div className="Book">
 //       <h2>{props.title}</h2>
 //       <p dangerouslySetInnerHTML={{__html: props.body}} ></p>
 //       <p>{props.featured_media}</p>
 //   </div>
//);

//Book.propTypes = {
 //   title: PropTypes.string,
 //   body: PropTypes.string,
 //   featured_media: PropTypes.string,
//};

//Book.defaultProps = {
//    title: "Book Title",
//    body: "Book Body.",
//    featured_media: "Book image",
//};


