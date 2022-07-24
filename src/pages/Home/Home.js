import { Link } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import CardHome from "../../components/Card/CardHome/CardHome";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import bee from "../../img/spelling-bee-logo-bulletin-square320-v5.png";
import wordle from "../../img/alpha-wordle-icon-new-square320-v2.png";
import crossword from "../../img/crossword-logo-nytgames-hires-square320-v3.png";
import chess from "../../img/Alpha-chess-new-icon-square320.png";
import letter from "../../img/alpha-letterboxed-promo-1622145789727-square320.png";
import tiles from "../../img/tiles-logo-nytgames-hi-res-square320-v4.png";

const Home = ({ home, world, tech, science, health, politic }) => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.newsContainer}>
          {home.slice(0, 5).map((h, i) => (
            <Link key={i} to={`/news/${home.indexOf(h)}/home`}>
              <CardHome
                title={h.title}
                abstract={h.abstract}
                url={h.multimedia[1].url}
                caption={h.multimedia[1].caption}
                copyright={h.multimedia[1].copyright}
              />
            </Link>
          ))}
        </div>
        <div className={styles.asideContainer}>
          <Aside home={home} />
        </div>
      </div>
      <div className={styles.quickNewsContainer}>
        {home.slice(16, 20).map((h, i) => (
          <Link key={i} to={`/news/${home.indexOf(h)}/home`}>            
              <div className={styles.quickNewsText}>
                <h5>{h.title}</h5>
                <p>{h.abstract}</p>
              </div>
              <img src={h.multimedia[2].url} alt="" />            
          </Link>
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
      <div className={styles.lastestNewsContainer}>
        <h3>NEWS</h3>
        <div>
          <div className={styles.lastestNewsSection}>
            {world.slice(1, 2).map((world, i) => (
              <div key={i}>
                <h4>World News</h4>
                <img src={world.multimedia[2].url} alt="" />
                <p>{world.abstract}</p>
              </div>
            ))}
            {world.slice(2, 3).map((world, i) => (
              <div key={i}>
                <p>{world.abstract}</p>
              </div>
            ))}
            {world.slice(3, 4).map((world, i) => (
              <div key={i}>
                <p>{world.abstract}</p>
              </div>
            ))}
          </div>
          <div className={styles.lastestNewsSection}>
            {politic.slice(1, 2).map((politic, i) => (
              <div key={i}>
                <h4>Politics</h4>
                <img src={politic.multimedia[2].url} alt="" />
                <p>{politic.abstract}</p>
              </div>
            ))}
            {politic.slice(2, 3).map((politic, i) => (
              <div key={i}>
                <p>{politic.abstract}</p>
              </div>
            ))}
            {politic.slice(3, 4).map((politic, i) => (
              <div key={i}>
                <p>{politic.abstract}</p>
              </div>
            ))}
          </div>
          <div className={styles.lastestNewsSection}>
            {tech.slice(1, 2).map((tech, i) => (
              <div key={i}>
                <h4>Technology</h4>
                <img src={tech.multimedia[2].url} alt="" />
                <p>{tech.abstract}</p>
              </div>
            ))}
            {tech.slice(2, 3).map((tech, i) => (
              <div key={i}>
                <p>{tech.abstract}</p>
              </div>
            ))}
            {tech.slice(3, 4).map((tech, i) => (
              <div key={i}>
                <p>{tech.abstract}</p>
              </div>
            ))}
          </div>
          <div className={styles.lastestNewsSection}>
            {science.slice(4, 5).map((science, i) => (
              <div key={i}>
                <h4>Science</h4>
                <img src={science.multimedia[2].url} alt="" />
                <p>{science.abstract}</p>
              </div>
            ))}
            {science.slice(2, 3).map((science, i) => (
              <div key={i}>
                <p>{science.abstract}</p>
              </div>
            ))}
            {science.slice(3, 4).map((science, i) => (
              <div key={i}>
                <p>{science.abstract}</p>
              </div>
            ))}
          </div>
          <div className={styles.lastestNewsSection}>
            {health.slice(1, 2).map((health, i) => (
              <div key={i}>
                <h4>Health</h4>
                <img src={health.multimedia[2].url} alt="" />
                <p>{health.abstract}</p>
              </div>
            ))}
            {health.slice(2, 3).map((health, i) => (
              <div key={i}>
                <p>{health.abstract}</p>
              </div>
            ))}
            {health.slice(3, 4).map((health, i) => (
              <div key={i}>
                <p>{health.abstract}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
