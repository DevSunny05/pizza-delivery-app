
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
