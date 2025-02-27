import './App.css'
import Home from './containers/home/Home'
import MovieListing from './containers/movie_listing/MovieListing'
import MovieDetails from './containers/movie_details/MovieDetails'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'


function App() {
 
  return (
    <div className="navAndContent">
        <HashRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movielisting" element={<MovieListing/>}/>
          <Route path="/moviedetails/:id" element={<MovieDetails/>}/>
        </Routes>
        </HashRouter>
      </div>
  )
}

export default App
