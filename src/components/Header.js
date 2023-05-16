import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <>
    <div className="header">
        <div className="left">
       <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/863px-IMDB_Logo_2016.svg.png?20200406194337" alt="" style={{width:'70px'}}/></Link>
        <Link to="/cineFlix/popular">Popular</Link>
        <Link to="/cineFlix/topRated">Top Rated</Link>
        <Link to="/cineFlix/upcoming">Upcoming</Link>
        </div>
        <div className="right">

        </div>
    </div>
    </>
  )
}

export default Header