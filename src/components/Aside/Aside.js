import { Link } from "react-router-dom";
import styles from "./Aside.module.css";

const Aside = ({ home }) => {
  return (
    <>
      {home.slice(5, 6).map((aside, i) => (
        <Link className={styles.firstAside} key={i} to={`/news/${home.indexOf(aside)}/home`}>
          <img src={aside.multimedia[1].url} alt="" />
          <small>{aside.multimedia[1].copyright}</small>
          <h3>{aside.title}</h3>
          <p>{aside.abstract}</p>
        </Link>
      ))}

      <div className={styles.secondAside}>
        {home.slice(6, 8).map((aside, i) => (
          <Link key={i} to={`/news/${home.indexOf(aside)}/home`}>
            <img src={aside.multimedia[1].url} alt="" />
            <h4>{aside.title}</h4>
          </Link>
        ))}
      </div>
      <div className={styles.thirdAside}>
        <h3>In Case You Missed It</h3>
      {home.slice(8, 16).map((aside, i) => (
          <Link key={i} to={`/news/${home.indexOf(aside)}/home`}>
            <h4>{aside.title}</h4>
            <img src={aside.multimedia[2].url} alt="" />
          </Link>
        ))}  
      </div>
    </>
  );
};

export default Aside;
