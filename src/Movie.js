import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    //부모 컴포넌트에게서 받는 정보의 타입을 체크
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string
    };

    render(){
        return(
            <div>
                <MoviePoster title={this.props.title} poster={this.props.poster} />
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}

// class MoviePoster extends Component{

//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         return(
//             <img src={this.props.poster} alt={this.props.title}></img>
//         );
//     }
// }

function MoviePoster({poster, title}){
    return(
        <img src={poster} alt={title}></img>
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;