import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitle = [
  'Matrix', 'Full Metal Jacket', 'Oldboy', 'Star Wars'
]

const movieImages = [
  'https://t1.daumcdn.net/movie/e49c2e4eb419a9813228b5ab6bc5b039362236ea',
  'http://blogthumb2.naver.net/data18/2007/1/6/4/full_metal_jacket_manif-inde9898.jpg?type=w2',
  'https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg',
  'https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg'
]

const movies = [
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
//props로 데이터를 내리는 방법
//컴포넌트 태그 안에 props로 내릴 때의 이름을 표시하고 정보를 담아준다 
class App extends Component {
  render() {
    return (
      <div className="App">
        {
        /* 
          <Movie title={movieTitle[0]} poster={movieImages[0]}/>
          <Movie title={movieTitle[1]} poster={movieImages[1]}/>
          <Movie title={movieTitle[2]} poster={movieImages[2]}/>
          <Movie title={movieTitle[3]} poster={movieImages[3]}/>
        */
          // v-for과 같이 많은 정보를 표현할 때는 map 함수를 통해서 나타내자
          // index를 함께 써주면서 unique 한 key를 지정해주도록 하자 
          movies.map((movie, index ) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />
          })
        }
        
      </div>
    );
  }
}

export default App;
