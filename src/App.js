import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';
import Services from './router/Services';
function App() {
  return (
    <div className="App">
      <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/About" element={<About/>}/>
   <Route path="/Services" element={<Services/>}/>
      </Routes>
    </div>
  );
}

export default App;
