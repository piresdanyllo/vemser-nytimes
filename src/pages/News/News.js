import axios from "axios";
import { useState, useEffect } from "react";
import HeaderSection from "../../components/Header/HeaderSection/HeaderSection";
import styles from "./News.module.css";

const News = () => {
  let path = window.location.pathname;
  let pathSplit = path.split("/");
  let identificador = parseInt(pathSplit[2]);
  let section = pathSplit[3];

  const [id, setId] = useState('');

  const [news, setNews] = useState([]);

  const setup = async () => {
    try {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=6XPMtw9fl1Pb1ingbJozVVcqE63AtaSV`
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
      {news.slice(id, id+1).map((item ,i) => (
      <div key={i} className={styles.newsContainer}>
        <small>{item.kicker}</small>
        <h1>{item.title}</h1>
        <p>{item.abstract}</p>
        <img src={item.multimedia[1].url} alt="" />
        <small>{item.caption} {item.copyright}</small>
        <p>{item.abstract}</p>
        <small>{item.byline}</small>
        <small>{item.created_date}</small>
        <p>{item.abstract}</p>
      </div>
      ))}
    </>
  );
};

export default News;
