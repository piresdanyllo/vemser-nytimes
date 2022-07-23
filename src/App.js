// import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';

import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  const [home, setHome] = useState([])

  const setup = async () => {
    try {
      const {data} = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=6Y0M519ehRhmYcLc9tWRWAV7AxdLvzTG')
      .then()
      setHome(data.results)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
   }
    useEffect(() => {
      setup()
    },[])

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home api={home}/>}/>      
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
