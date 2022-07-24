import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home/Home";
import World from "./pages/World/World";
import Tech from "./pages/Tech/Tech";
import Politics from "./pages/Politics/Politics";
import Science from "./pages/Science/Science";
import Health from "./pages/Health/Health";
import News from "./pages/News/News";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [home, setHome] = useState([]);
  const [world, setWorld] = useState([]);
  const [tech, setTech] = useState([]);
  const [politics, setPolitics] = useState([]);
  const [health, setHealth] = useState([]);
  const [science, setScience] = useState([]);

  const setupWorld = async () => {
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=7gazRYMJQ6vO0wTGQcKjSPpTsWRwnnhp"
      );
      setWorld(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const setup = async () => {
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ZAn70KHg6H4TkxRCJSdo33i8RNuL6RcC"
      );
      setHome(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const setupTech = async () => {
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=ns4D0gVM50alqFZj1yLmuiTQYf8rTBWB"
      );
      setTech(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const setupPolitics = async () => {
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=7gazRYMJQ6vO0wTGQcKjSPpTsWRwnnhp"
      );
      setPolitics(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const setupHealth = async () => {
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=7gazRYMJQ6vO0wTGQcKjSPpTsWRwnnhp"
      );
      setHealth(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const setupScience = async () => {
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=7gazRYMJQ6vO0wTGQcKjSPpTsWRwnnhp"
      );
      setScience(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setup();
    setupWorld();
    setupTech();
    setupPolitics();
    setupHealth();
    setupScience();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              home={home}
              world={world}
              tech={tech}
              health={health}
              science={science}
              politic={politics}
            />
          }
        />
        <Route path="/section/world" element={<World api={world} />} />
        <Route path="/section/tech" element={<Tech api={tech}/>} />
        <Route path="/section/politics" element={<Politics api={politics}/>} />
        <Route path="/section/science" element={<Science api={science}/>} />
        <Route path="/section/health" element={<Health api={health}/>} />
        <Route path="/news/:id/:section" element={<News/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
