import "./MovieCard.css";
function MovieCard({datas, onMovieClick}) {
    return(
        <>
             <div className="multipleMovieList">
            {datas?.map((eachMovieDetails, index)=> {
                return(
                    <div onClick={()=>onMovieClick(eachMovieDetails?.imdbID)} className="togetherAllMovies" key={index}>
                        <img className="eachPoster" src={eachMovieDetails?.Poster} alt="" />
                    </div>
                )
            })}
        </div>
        </>
    )
}
export default MovieCard;
