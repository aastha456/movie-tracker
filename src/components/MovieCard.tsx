import type { Movie } from "./types";
import "./MovieCard.css"

interface MovieProps {
  movie: Movie;
  onAddFavourites?: (movie: Movie) => void;
  onAddWatched?: (movie: Movie) => void;
}

function MovieCard ({movie, onAddFavourites, onAddWatched}: MovieProps) {
    return (
        <div className="movie-container">
            {movie.poster_path && (
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.title} Poster`}  />
                )}
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
            
            {onAddFavourites &&(
            <button onClick={() => onAddFavourites(movie)}>Add to favourites</button>)}

            {onAddWatched && (
            <button onClick={() => onAddWatched(movie)}>Mark as Watched</button>
             )}

        </div>
    )
}
export default MovieCard;