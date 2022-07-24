import axios from "axios";
import { useState, useEffect } from "react";
import HeaderSection from "../../components/Header/HeaderSection/HeaderSection";
import styles from "./News.module.css";

const News = () => {
  let path = window.location.pathname;
  let pathSplit = path.split("/");
  let identificador = parseInt(pathSplit[2]);
  let section = pathSplit[3];

  const [id, setId] = useState('')

  const [news, setNews] = useState([]);

  const setup = async () => {
    try {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=ZAn70KHg6H4TkxRCJSdo33i8RNuL6RcC`
      );
      setNews(data.results);
      setId(identificador)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <>
      <HeaderSection />
      {news.slice(id, (id+1)).map((item ,i) => (
      <div key={i} className={styles.newsContainer}>
        <h1>{item.title}</h1>
        <p>{item.abstract}</p>
        <img src={item.multimedia[1].url} alt="" />
        <small>{item.caption} {item.copyright}</small>
        <p>{item.abstract}</p>
      </div>
      ))}      
    </>
  );
};

export default News;
