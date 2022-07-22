// import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import Home from './pages/Home/Home'
import Header from './components/Header/Header';
import HeaderSection  from './components/Header/HeaderSection/HeaderSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    {/* <HeaderSection/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
