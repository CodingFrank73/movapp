
import './Styles/main.css'
import { Routes, Route } from 'react-router-dom';

//pages
import Home from './Components/home';
import MovieDetail from './Components/movieDetail';
import Imprint from './Components/imprint';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieDetail/:id" element={<MovieDetail />} />
        <Route path="/imprint/" element={<Imprint />} />
      </Routes>
    </div>
  );
}

export default App;
