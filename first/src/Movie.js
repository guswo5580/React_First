import React from 'react';
//기본적으로 리엑트와 컴포넌트 체제를 이용할 수 있도록 선언한다
//class 컴포넌트가 필요하지 않으면 React 만 선언해주어도 된다 

import propTypes from 'prop-types';
import './Movie.css';

    function Movie ({title, poster, genres, synopsis }){
        return (
            <div className="Movie">
                <div className="Movie_Colums">
                    <MoviePoster poster={poster} alt={title}/>
                </div>
                <div className="Movie_Colums">
                    <h1>{title}</h1>
                    <div className="Movie_Genres">
                        {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/> )}
                    </div>
                    <p className="Movie_synopsis">
                        {synopsis}
                    </p>
                </div>
            </div>
        )
    }

//props를 받는 방법은 this.props를 선언하고, 부모에서 넘길 때의 데이터 이름을 선언해준다 
// class MoviePoster extends Component{
//     static propTypes = {
//         poster : propTypes.string.isRequired
//     }
//     render(){
//         return (
//             <img src={this.props.poster}></img>
//         )
//     }
// }

// return 만 필요한 간단한 컴포넌트의 경우 class 컴포넌트가 아닌 function 컴포넌트로 지정해준다 
    function MoviePoster({poster, alt}){
        return (
            <img src={poster} className="Movie_Poster" alt={alt} title={alt} />
        )
    }
    function MovieGenre({genres}){
        return (
            <span className="Movie_Genre">{genres}</span>
        )
    }

    ///////////////////////////////////////////////////////////////////
    Movie.propTypes = {
        title : propTypes.string.isRequired,
        poster : propTypes.string.isRequired,
        genres : propTypes.array.isRequired,
        synopsis : propTypes.string.isRequired
        //해당 컴포넌트에 등장하는 props에 대해 지정해주도록 하자 
    }

    MoviePoster.propTypes = {
        poster : propTypes.string.isRequired,
        alt : propTypes.string.isRequired
    }
    
    MovieGenre.propTypes = {
        genres : propTypes.array.isRequired
    }

// class Movie extends Component{
//     static propTypes = {
//         // npm i prop-types 를 통해 설치해주고 import 시켜준 후 이용한다 
//         // title : React.propTypes.string,
//         // poster : React.propTypes.string
//         title : propTypes.string.isRequired,
//         poster : propTypes.string.isRequired
//         // props로 넘어오는 정보에 대한 값의 type을 미리 지정해준다 
//         // isRequired 는 title에 해당하는 정보를 반드시 받아야 한다는 의미, title이 넘어오지 않으면 error 
//     }
// }

export default Movie