import {useEffect, useState} from 'react'
import "./Home.css"
import MovieCard from '../components/MovieCard';
import {useMovieContext} from '../context/MovieContextProvider'

interface Movies {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
}

function Home(){
  const [movies, setMovies] = useState<Movies[]>([]);
  const { addFavourites, addWatched } = useMovieContext();

  const [loading, setLoading] = useState(false);
  const APIKey = import.meta.env.VITE_API_KEY;

  const fetchMovies = async () => {
        try{
            setLoading(true)
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}`)
            const data = await response.json();
            setMovies(data.results);

        }catch(error){
            console.log("Error fetching data: ", error)

        } finally{
            setLoading(false)
        }
    };

  useEffect(() => {
    fetchMovies();
  }, []);
  

  if(loading){
    return <h1>Loading the movies ....</h1>
  }
  

  return (
    <div className='app-container'>
        <h1>Popular Movies</h1>
        <div className='movie-grid'>
            {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onAddFavourites={addFavourites} onAddWatched={addWatched}/>
        ))}
        </div>
    </div>
  )
}

export default Home
