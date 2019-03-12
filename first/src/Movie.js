import React, { Component } from 'react';
//기본적으로 리엑트와 컴포넌트 체제를 이용할 수 있도록 선언한다
import propTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{
    static propTypes = {
        // npm i prop-types 를 통해 설치해주고 import 시켜준 후 이용한다 
        // title : React.propTypes.string,
        // poster : React.propTypes.string
        title : propTypes.string.isRequired,
        poster : propTypes.string.isRequired
        // props로 넘어오는 정보에 대한 값의 type을 미리 지정해준다 
        // isRequired 는 title에 해당하는 정보를 반드시 받아야 한다는 의미, title이 넘어오지 않으면 error 
    }

    render(){
        //소괄호 사용하는 것에 유의 
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>   
        )
    }
}
//props를 받는 방법은 this.props를 선언하고, 부모에서 넘길 때의 데이터 이름을 선언해준다 
class MoviePoster extends Component{
    static propTypes = {
        poster : propTypes.string.isRequired
    }
    render(){
        return (
            <img src={this.props.poster}></img>
        )
    }
}

export default Movie