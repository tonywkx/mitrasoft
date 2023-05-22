import './App.css';
import Home from './pages/home';
import Details from './pages/details';
import About from './pages/about';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes>
  );
}

export default App;
