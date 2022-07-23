import Aside from "../../components/Aside/Aside";
import CardHome from "../../components/Card/CardHome/CardHome";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import bee from '../../img/spelling-bee-logo-bulletin-square320-v5.png'
import wordle from '../../img/alpha-wordle-icon-new-square320-v2.png'
import crossword from '../../img/crossword-logo-nytgames-hires-square320-v3.png'
import chess from '../../img/Alpha-chess-new-icon-square320.png'
import letter from '../../img/alpha-letterboxed-promo-1622145789727-square320.png'
import tiles from '../../img/tiles-logo-nytgames-hi-res-square320-v4.png'

const Home = ({ api }) => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.newsContainer}>
          {api.slice(0, 5).map((home, i) => (
            <CardHome
              key={i}
              title={home.title}
              abstract={home.abstract}
              url={home.multimedia[1].url}
              caption={home.multimedia[1].caption}
              copyright={home.multimedia[1].copyright}
            />
          ))}
        </div>
        <div className={styles.asideContainer}>
          <Aside api={api} />
        </div>
      </div>
      <div className={styles.quickNewsContainer}>
        {api.slice(16, 20).map((home, i) => (
          <div key={i}>
            <div className={styles.quickNewsText}>
              <h5>{home.title}</h5>
              <p>{home.abstract}</p>
            </div>
            <img src={home.multimedia[2].url} alt="" />
          </div>
        ))}
      </div>
      <div className={styles.playContainer}>
        <h3>Play</h3>
        <div className={styles.plays}>
          <div className={styles.play}>
            <div className={styles.playText}>
              <h4>Spelling Bee</h4>
              <p>How many word can you make with 7 letters?</p>
            </div>
            <img src={bee} alt="Bee" />
          </div>
          <div className={styles.play}>
            <div className={styles.playText}>
              <h4>Wordle</h4>
              <p>Guess the 5-letters word with 6 chances.</p>
            </div>
            <img src={wordle} alt="Wordle" />
          </div>
          <div className={styles.play}>
            <div className={styles.playText}>
              <h4>The Crossword</h4>
              <p>Get clued in with wordplay, every day.</p>
            </div>
            <img src={crossword} alt="Crossword" />
          </div>
        </div>
        <div className={styles.plays}>
          <div className={styles.play}>
            <div className={styles.playText}>
              <h4>Chess Replay</h4>
              <p>Play historic chess games.</p>
            </div>
            <img src={chess} alt="Chess" />
          </div>
          <div className={styles.play}>
            <div className={styles.playText}>
              <h4>Letter Boxed</h4>
              <p>Create words using letters around the square.</p>
            </div>
            <img src={letter} alt="Letter" />
          </div>
          <div className={styles.play}>
            <div className={styles.playText}>
              <h4>Tiles</h4>
              <p>Match visual elements and keep your chain going.</p>
            </div>
            <img src={tiles} alt="Tiles" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
