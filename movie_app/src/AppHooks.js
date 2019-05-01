import React, {useState, useEffect} from 'react';
import "./App.css";
import Movie from "./Movie";

const App = () => {
    const [movies, setMovies] = useState(null);

    useEffect(async () => {
        //call api -- await 으로 차근차근 끊어서 해결
        const response = await fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count');
        const jsonData = await response.json();
        const data = await jsondata.data.movies;
        setMovies(data);

    },[]);

    const _renderMovies = () => {
        console.log(movies);
        const rendering = movies.map((m) => {
            return (
                <Movie
                    key={m.id}
                    title={m.title_english}
                    poster={m.large_cover_image}
                    genres={m.genres}
                    synopsis={m.synopsis}
                />
            );
        });
        return rendering;
    };

    return (
        <div className={movies !== null ? "App" : "App--loading"}>
            {movies !== null ? _renderMovies() : "Loading"}
        </div>
    );
}
export default App;