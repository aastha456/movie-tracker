import type { Movie } from "./types";
import "./MovieCard.css"
import { useMovieContext } from "../context/MovieContextProvider";

interface MovieProps {
  movie: Movie;
}

function MovieCard ({movie}: MovieProps) {
    const { favourites, watched, toggleFavourites, toggleWatched } = useMovieContext();
    const isFavourite = favourites.some(fav => fav.id === movie.id);
    const isWatched = watched.some(m => m.id === movie.id);

    return (
        <div className="movie-container">
            {movie.poster_path && (
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.title} Poster`}  />
                )}
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
            
            <button onClick={() => toggleFavourites(movie)}>
                {isFavourite ? "Remove from Favourites" : "Add to Favourites"}

            </button>
            <button onClick={() => toggleWatched(movie)}>
                {isWatched ? "Mark as Unwatched" : "Mark as Watched"}
            </button>
            

        </div>
    )
}
export default MovieCard;