import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import './App.css';
// import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';
import Section from './pages/Section/Section';

function App() {

  const [world, setWorld] = useState([]);
  const [section, setSection] = useState([]);
  const [tech, setTech] = useState([]);

  const setupWorld = async () => {
    try {
      const { data } = await axios.get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vrgFjjAGQDr8uwf0OzcjOkLG2KMDXtdi')
      setWorld(data.results)
      setSection(data.section)
      console.log(section)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    setupWorld()
  }, []);

  const [home, setHome] = useState([])

  const setup = async () => {
    try {
      const { data } = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=6Y0M519ehRhmYcLc9tWRWAV7AxdLvzTG')
        .then()
      setHome(data.results)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    setup()
  }, [])

  const setupTech = async () => {
    try {
      const { data } = await axios.get('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=vrgFjjAGQDr8uwf0OzcjOkLG2KMDXtdi')
      setTech(data.results)
      setSection(data.section)
      console.log(section)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    setupTech()
  }, []);

  console.log(section)
  return (
    <BrowserRouter>

      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<Section api={world} section={section} />} />
        {/* <Route path='/section/technology' element={<Section api={tech} section={section}/>}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
