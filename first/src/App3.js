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

//props로 데이터를 내리는 방법
//컴포넌트 태그 안에 props로 내릴 때의 이름을 표시하고 정보를 담아준다 
class App extends Component {
  state = {
    greeting : 'hello!',
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
  }//state를 default로 선언하는 방법

  componentDidMount(){
    //component가 마운트가 완료된 후
    setTimeout(() => {
      this.setState({
        //state는 직접적으로 변화를 줄 수 없다
        //ex) this.state.greeting : 'hello again'
        //setState를 통해서 변화를 주어야 한다
        //state가 변경되면 rerendering이 일어난다 
        greeting : 'hello again!',
        movies : [
          //배열안의 내용을 모두 가져오는 spred(...)을 이용하여 기존의 배열을 가져오고 새로운 내용을 추가 
          ...this.state.movies,
          //순서에 따라 나타나는 위치가 다름
          {
            title : 'Transporter',
            poster : 'https://images-na.ssl-images-amazon.com/images/I/51A250KA8RL._SY445_.jpg'
          }
        ]
      })
    }, 3000);
  }

  render() {
    return (
      <div className="App3">
        {this.state.greeting}
        {
        /* 
          <Movie title={movieTitle[0]} poster={movieImages[0]}/>
          <Movie title={movieTitle[1]} poster={movieImages[1]}/>
          <Movie title={movieTitle[2]} poster={movieImages[2]}/>
          <Movie title={movieTitle[3]} poster={movieImages[3]}/>
        */
          // v-for과 같이 많은 정보를 표현할 때는 map 함수를 통해서 나타내자
          // index를 함께 써주면서 unique 한 key를 지정해주도록 하자 
          this.state.movies.map((movie, index ) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />
          })
        }
        
      </div>
    );
  }
}

export default App;
