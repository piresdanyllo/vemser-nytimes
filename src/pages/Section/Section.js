import {Link} from 'react-router-dom'
import CardSection from "./CardSection/CardSection";
import CardSectionMini from "./CardSection/CardSectionMini";
import CardSectionAside from "./CardSection/CardSectionAside";
import styles from "./Section.module.css";

const Section = ({ api, section }) => {
    return (
        <>
            <div className={styles.blocoNoticias}>

                <div>
                    {api.slice(2, 3).map((item, i) => (
                        <Link key={i} to={`/news/${api.indexOf(item)}/${section}`}>
                        <CardSection                            
                            url={item.multimedia[1].url}
                            copyright={item.multimedia[1].copyright}
                            kicker={item.kicker}
                            title={item.title}
                            abstract={item.abstract}
                            byline={item.byline}
                        />
                        </Link>
                    ))}
                </div>

                <div className={styles.verticalline}>
                </div>

                <div>
                    {api.slice(4, 5).map((item, i) => (
                        <Link key={i} to={`/news/${api.indexOf(item)}/${section}`}>
                        <CardSectionMini
                            key={i}
                            url={item.multimedia[1].url}
                            copyright={item.multimedia[1].copyright}
                            kicker={item.kicker}
                            title={item.title}
                            abstract={item.abstract}
                            byline={item.byline}
                        />
                        </Link>
                    ))}
                </div>

                <div className={styles.verticalline}>
                </div>

                <div>
                    <div>
                        {api.slice(5, 6).map((item, i) => (
                           <Link key={i} to={`/news/${api.indexOf(item)}/${section}`}>
                           <CardSectionAside
                               key={i}
                               url={item.multimedia[1].url}
                               copyright={item.multimedia[1].copyright}
                               kicker={item.kicker}
                               title={item.title}
                               abstract={item.abstract}
                               byline={item.byline}
                           />
                           </Link>
                        ))}
                    </div>
                    <div className={styles.horizontallLine}>
                    </div>
                    <div>
                        {api.slice(6, 7).map((item, i) => (
                           <Link key={i} to={`/news/${api.indexOf(item)}/${section}`}>
                           <CardSectionAside
                               key={i}
                               url={item.multimedia[1].url}
                               copyright={item.multimedia[1].copyright}
                               kicker={item.kicker}
                               title={item.title}
                               abstract={item.abstract}
                               byline={item.byline}
                           />
                           </Link>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Section;
