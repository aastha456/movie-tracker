import type {Movie} from "../components/types"

import { createContext, useContext, type ReactNode, useState } from "react"

interface MovieContextType {
    favourites: Movie[];
    watched: Movie[];
    addFavourites: (movie: Movie) => void;
    addWatched: (movie: Movie) => void;

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
        return saved ? JSON.parse : [];
    });
    const [watched, setWatched] = useState<Movie[]>(() => {
        const saved = localStorage.getItems("watched");
         return saved ? JSON.parse : [];    
});

    const addFavourites = (movie: Movie) => {
        if(!favourites.find(fav => fav.id === movie.id)){
            setFavourites([...favourites, movie])
        }
    }

    const addWatched = (movie: Movie) => {
        if(!watched.find(m => m.id === movie.id)){
            setWatched([...watched, movie])
        }
    }

    return (
        <MovieContext.Provider value={{favourites, watched, addFavourites, addWatched}}>
            {children}
        </MovieContext.Provider>
    )
}
