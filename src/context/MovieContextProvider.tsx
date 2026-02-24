import type {Movie} from "../components/types"

import { createContext, useContext, type ReactNode, useState, useEffect } from "react"

interface MovieContextType {
    favourites: Movie[];
    watched: Movie[];
    addFavourites: (movie: Movie) => void;
    addWatched: (movie: Movie) => void;
    removeFavourite: (id: number) => void;
    removeWatched: (id: number) => void;
    toggleFavourites: (movie: Movie) => void;
    toggleWatched: (movie: Movie) => void;

}
const MovieContext = createContext<MovieContextType | undefined>(undefined)

export const useMovieContext = () => {
    const context = useContext(MovieContext);
    if(!context){
        throw new Error('useMovieContext must be within the MovieContextProvider')
    }
    return context
}

interface MovieProviderProps {
    children: ReactNode;
}

export const MovieContextProvider = ({children}: MovieProviderProps) => {
    const [favourites, setFavourites] = useState<Movie[]>(() => {
        const saved = localStorage.getItem("favourites");
        return saved ? JSON.parse(saved) : [];
    });
    const [watched, setWatched] = useState<Movie[]>(() => {
        const saved = localStorage.getItem("watched");
         return saved ? JSON.parse(saved) : [];    
    });

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    useEffect(() => {
        localStorage.setItem("watched", JSON.stringify(watched));

    }, [watched]);

    const addFavourites = (movie: Movie) => {
        if(!favourites.find(fav => fav.id === movie.id)){
            setFavourites(prev => [...prev, movie])
        }
    }

    const addWatched = (movie: Movie) => {
        if(!watched.find(m => m.id === movie.id)){
            setWatched(prev => [...prev, movie])
        }
    }

    const removeFavourite = (id: number) => {
        setFavourites(prev => prev.filter(movie => movie.id !== id));
    }

    const removeWatched = (id: number) => {
        setWatched(prev => prev.filter(movie => movie.id !== id))
    }

    const toggleFavourites = (movie: Movie) => {
        setFavourites(prev => prev.some(m => m.id === movie.id) ? prev.filter(m => m.id !== movie.id) : [...prev, movie])
    }
    const toggleWatched = (movie: Movie) => {
        setWatched(prev => prev.some(m => m.id === movie.id) ? prev.filter(m => m.id !== movie.id) : [...prev, movie])
    }
    return (
        <MovieContext.Provider value={{favourites, watched, addFavourites, addWatched, removeFavourite, removeWatched, toggleFavourites, toggleWatched}}>
            {children}
        </MovieContext.Provider>
    )
}
