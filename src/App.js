import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount() 
  // 컴포넌트가 존재하기 시작하면 해당 사이클이 자동으로 발생
  // willMount()가 진행될때 api에 작업 요청

  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  // 1. 새로운 props를 얻음
  // 2. 이전과 새로운 props가 다를경우, 업데이트 = true로 생각

  // state: react 컴포넌트 안에 있는 object.
  // 컴포넌트 안에 있는 state가 변화할 때마다 다시 render!

  state = {
  }

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map(movie => {
      //console.log(movie);
      return <Movie title={movie.title_english} poster={movie.medium_cover_image} 
      key={movie.id} genres={movie.genres} synopsis={movie.synopsis}/>
    });

    return movies;
  }

  _getMovies = async() =>{
    const movies = await this._callApi(); //성공적인 수행이 아닌 \'끝나기'를 기다림
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}> 
        { movies ? this._renderMovies() : 'Loading' }      
      </div>
    );
  }
}

export default App;
