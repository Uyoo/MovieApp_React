import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

class Movie extends Component{

    //부모 컴포넌트에게서 받는 정보의 타입을 체크
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired
    };
    render(){
        return(
            <div className="Movie">
                <div className="Movie_Columns">
                    <MoviePoster alt={this.props.title} poster={this.props.poster} />
                </div>
                <div className="Movie_Columns">
                    <h3>{this.props.title}</h3>
                    <div className="Movie_Genres">
                        {this.props.genres.map((genre, index) => {
                            return <MovieGenre genre={genre} key={index}/>
                        })}
                    </div>
                    <p className="Movie_Synopsis">
                        <LinesEllipsis
                         text={this.props.synopsis}
                         maxLine='3'
                         ellipsis='...'
                         trimRight
                         basedOn='letters'>
                            
                        </LinesEllipsis>
                    </p>
                </div>

            </div>
        );
    }
}

class MoviePoster extends Component{
    static propTypes = {
        poster: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }
    render(){
        return(
            <img className="Movie_Poster" src={this.props.poster} alt={this.props.alt} title={this.props.alt}></img>
        );
    }
}

class MovieGenre extends Component{
    static propTypes = {
        genre: PropTypes.string.isRequired
    }

    render(){
        return(
            <span className="Movie_Genre">{this.props.genre} </span>
        );
    }
}

// function MovieGenre({genre}){
//     return(
//         <span className="Movie_Genre">{genre} </span>
//     );
// }
// MovieGenre.propTypes={
//     genre: PropTypes.string.isRequired
// }

// function MoviePoster({poster, title}){
//     return(
//         <img src={poster} alt={title}></img>
//     )
// }

// MoviePoster.propTypes = {
//     poster: PropTypes.string.isRequired
// }

export default Movie;