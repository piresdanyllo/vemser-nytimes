import styles from "./Aside.module.css";

const Aside = ({ api }) => {
    console.log(api)
  return (
    <>
      {api.slice(5, 6).map((home, i) => (
        <div className={styles.firstAside} key={i}>
          <img src={home.multimedia[1].url} alt="" />
          <small>{home.multimedia[1].copyright}</small>
          <h3>{home.title}</h3>
          <p>{home.abstract}</p>
        </div>
      ))}

      <div className={styles.secondAside}>
        {api.slice(6, 8).map((aside, i) => (
          <div key={i}>
            <img src={aside.multimedia[1].url} alt="" />
            <h4>{aside.title}</h4>
          </div>
        ))}
      </div>
      <div className={styles.thirdAside}>
        <h3>In Case You Missed It</h3>
      {api.slice(8, 16).map((aside, i) => (
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
