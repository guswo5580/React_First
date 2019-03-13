import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
    state = {

    }//state에 어떠한 값을 넘기고 하는 작업을 수행할 경우에는 state를 빈 상태로라도 선언해준다 

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
            {
              title : "Matrix", 
              poster : "https://t1.daumcdn.net/movie/e49c2e4eb419a9813228b5ab6bc5b039362236ea"
            },
            {
              title : "Full Metal Jacket",
              poster : "http://blogthumb2.naver.net/data18/2007/1/6/4/full_metal_jacket_manif-inde9898.jpg?type=w2"
            },
            {
              title : "Oldboy", 
              poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg"
            },
            {
              title : "Star Wars",
              poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
            }
          ]
      })
    }, 3000);
    //3초 뒤에 비어있는 state에 위와 같은 정보를 추가하겠다 
  }

  _renderMovies = () => {
      const movies = this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
      })
      return movies 
      //함수를 통해 무비 리스트를 나열할 수 있도록 정의
  }

  render() {
    return (
      <div className="App2">
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
