import styles from "./Aside.module.css";

const Aside = ({ home }) => {
  return (
    <>
      {home.slice(5, 6).map((aside, i) => (
        <div className={styles.firstAside} key={i}>
          <img src={aside.multimedia[1].url} alt="" />
          <small>{aside.multimedia[1].copyright}</small>
          <h3>{aside.title}</h3>
          <p>{aside.abstract}</p>
        </div>
      ))}

      <div className={styles.secondAside}>
        {home.slice(6, 8).map((aside, i) => (
          <div key={i}>
            <img src={aside.multimedia[1].url} alt="" />
            <h4>{aside.title}</h4>
          </div>
        ))}
      </div>
      <div className={styles.thirdAside}>
        <h3>In Case You Missed It</h3>
      {home.slice(8, 16).map((aside, i) => (
          <div key={i}>
            <h4>{aside.title}</h4>
            <img src={aside.multimedia[2].url} alt="" />
          </div>
        ))}  
      </div>
    </>
  );
};

export default Aside;
