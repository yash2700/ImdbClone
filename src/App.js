import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import Header from './components/Header';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
   <>
   <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path='/movie/:id' element={<MovieDetail />}></Route>
      <Route path='/cineFlix/popular' element={<Popular />}></Route>
      <Route path='/cineFlix/topRated' element={<TopRated />}></Route>
      <Route path='/cineFlix/upcoming' element={<Upcoming />}></Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
