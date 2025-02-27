import './MovieListing.css';
import movieBg from '../../assets/details_bg.jpg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../../component/movie_card/MovieCard';

function MovieListing() {

    const Navigate = useNavigate()

    const [trendingNowData, settrendingNowData] = useState([])

    const [trillerMovieData, setThrillerMovieData] = useState([])

    const [comedyMovieData, setComedyMovieData] = useState([])

    const [horrorMovieData, setHorrorMovieData] = useState([])

    useEffect(()=> {
        axios.get('https://omdbapi.com/?apikey=9ee2a188&s=action')
        .then((res) => {
            settrendingNowData(res?.data?.Search)
            console.log(res?.data?.Search)
        })
    }, [])

    useEffect(()=> {
        axios.get('https://omdbapi.com/?apikey=9ee2a188&s=thriller')
        .then((res) => {
            setThrillerMovieData(res?.data?.Search)
            console.log(res?.data?.Search)
        })
    }, [] )

    useEffect(()=> { 
        axios.get('https://omdbapi.com/?apikey=9ee2a188&s=comedy')
        .then((res) => {
            setComedyMovieData(res?.data?.Search)
            console.log(res?.data?.Search)
        })
    }, [])

    useEffect(()=> {
        axios.get('https://omdbapi.com/?apikey=9ee2a188&s=horror')
        .then((res) => {
            setHorrorMovieData(res?.data?.Search)
            console.log(res?.data?.Search)
        })
    }, [])

    const navigatingToEachMoviePage = (id) => {
        Navigate(`/moviedetails/${id}`)
    }
     
    return(
        <div className="entireDiv">
        <div className="container">
                <img className="movieListingBgImage" src={movieBg} alt="" />
                <div className="movieTitleAboveImage">
                    <p className="entireNTitle"><b className="nBold">N</b> Series</p>
                    <div className="justContent">
                        <h1 className="movieTitle">STRANGER THINGS</h1>
                        <p>#1 in TV Shows Today</p>
                        <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>
                        <button className="playButton">Play</button>
                        <button className="moreInfoButton">More info</button>
                    </div>
                </div>
        </div>
        <div>
        <p className="trendingNowText">Trending Now !</p>
        <MovieCard datas={trendingNowData} onMovieClick={navigatingToEachMoviePage}/>
        <p className="trendingNowText">Thriller !</p>
        <MovieCard datas={trillerMovieData} onMovieClick={navigatingToEachMoviePage}/>
        <p className="trendingNowText">Comedy !</p>
        <MovieCard datas={comedyMovieData} onMovieClick={navigatingToEachMoviePage}/>
        <p className="trendingNowText">Horror !</p>
        <MovieCard datas={horrorMovieData} onMovieClick={navigatingToEachMoviePage}/>
        </div>
        </div>
    )
}
export default MovieListing;    