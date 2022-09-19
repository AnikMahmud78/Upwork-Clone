import { Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries/Countries';
import Friend from './components/Friends/Friend';
import Home from './components/Home/Home';
import Navigate from './components/Landing/Header/Navbar/Navigate';
import NotFound from './components/Notfound/NotFound';



function App() {
  return (
    <div>
      <Navigate />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/countries' element={<Countries />}></Route>
        <Route path='/friend' element={<Friend />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/talent/:' element={<NotFound />}></Route>
      </Routes>

    </div>
  );
}

export default App;
