import './App.css'
import Header from './components/Header'
import FavouriteMovie from './pages/FavouriteMovie'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import WatchedMovie from './pages/WatchedMovie'


function App() {

  return (
    <>
    <Header title='Movie Tracker App'/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/favourite" element={<FavouriteMovie/>}/>
      <Route path="/watched" element={<WatchedMovie/>}/>

    </Routes>
  
  
    </>
   
  )
}

export default App
