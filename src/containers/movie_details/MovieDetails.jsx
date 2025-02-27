import "./MovieDetails.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; 
import MovieCard from "../../component/movie_card/MovieCard";

function MovieDetails() {

    let {id} = useParams()

    const navigate = useNavigate()

    const [suggestedMovies, setSuggestedMovies] = useState([])

    const [singleMovie, setSingleMovie] = useState({})

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=9ee2a188`)
        .then((res) => res.json())
        .then((data) => {setSingleMovie(data)
            console.log(singleMovie)
        })

    },[id])

    useEffect(()=> {
        axios.get('https://omdbapi.com/?apikey=9ee2a188&s=thriller')
        .then((res) => {
            setSuggestedMovies(res?.data?.Search)
            console.log(res?.data?.Search)
        })
    }, [] )

    const navigatingToEachMoviePage = (id) => {
        navigate(`/moviedetails/${id}`)     
        // window.location.reload()
    }
 
    return(
        <div className="entireMovieDetailsDiv">
            <div className="entireCard">
                <img className="singleMovieImage" src={singleMovie.Poster} alt="" />
                <div className="movieContent"> 
                <h1 className="eachContent" >{singleMovie?.Title}</h1>
                <p className="eachContent"> {singleMovie?.Plot}</p>
                <p className="eachContent">{singleMovie?.Type}</p>
                <p className="eachContent">{singleMovie?.Year}</p>
                <p className="eachContent">{singleMovie?.Runtime}</p>
                <button className="eachContent playButton">Play</button>
                </div> 
            </div> 
            <div>
                <p className="trendingNowText">Related Movies !</p>
                <MovieCard datas={suggestedMovies} onMovieClick={navigatingToEachMoviePage}/>
            </div>
            </div>
    )
}
export default MovieDetails;