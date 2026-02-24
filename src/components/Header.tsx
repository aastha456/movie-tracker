import { NavLink} from "react-router"
import './Header.css'
import { useMovieContext} from "../context/MovieContextProvider"
interface HeaderProps{
    title: string;

}

function Header ({title}: HeaderProps) {
    const { favourites, watched} = useMovieContext()
    return (
        <header className="header-container">
            <div className="header-left">
                <NavLink to="/">
                <h1>{title}</h1>
                </NavLink>
                
            </div>
            <div className="header-center">
                <input type="text" placeholder="Search for movies" className="search-bar"/>

            </div>
            <div className="header-right">
                <NavLink to="/">Home</NavLink>
               <NavLink to="/favourite">Favourite ({favourites.length})</NavLink>
               <NavLink to="/watched">Watched ({watched.length})</NavLink>
            </div>
            

        </header>
    )
}
export default Header;