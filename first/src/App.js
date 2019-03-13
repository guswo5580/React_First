import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
    state = {}

    componentDidMount() {
        //Promise 기반의 AJAX 이용 방식
        //Callback hell에 유의..
        // fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
        //     .then(response => response.json())
        //     .catch(error => console.log(error))
        this._getMovies();
    }
    _callApi = () => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(error => console.log(error))
    }
    //async await 이용방식
    _getMovies =  async () => {
        const movies = await this._callApi()
        this.setState({
            movies
        })
    }
    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
        })
        return movies 
        //함수를 통해 무비 리스트를 나열할 수 있도록 정의
    }

    render() {
        return (
        <div className="App">
            {
            this.state.movies ? this._renderMovies() : 'Loading...'
            //state의 movies가 true이면 _renderMovies 함수를 실행하고 
            //false면 Loading이라는 글을 띄운다
            //API 콜이 일어나는 시점을 기준으로 해서 조절할 수 있다 
            }
            
        </div>
        );
    }
}

export default App;
