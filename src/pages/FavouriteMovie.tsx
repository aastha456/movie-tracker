import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../context/MovieContextProvider'
import './FavouriteMovie.css'


function FavouriteMovie () {
    const { favourites } = useMovieContext()
    return (
        <div className='app-container'>
            <h1>Favourite Movies</h1>
            <div className="movie-grid">
                {favourites.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}

            </div>
            

        </div>
        
    )
}
export default FavouriteMovie