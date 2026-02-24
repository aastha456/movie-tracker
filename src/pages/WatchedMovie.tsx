
import MovieCard from "../components/MovieCard"
import { useMovieContext } from "../context/MovieContextProvider"
import './FavouriteMovie.css'


function WatchedMovie () {
    const { watched } = useMovieContext()
    return (
       <div className="app-container">
        <h1>Watched Movies</h1>
        <div className="movie-grid">
            {watched.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
        ))}

        </div>
        
       </div>
    )
}
export default WatchedMovie