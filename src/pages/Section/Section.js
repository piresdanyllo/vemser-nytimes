import CardSection from "./CardSection/CardSection";
import CardSectionMini from "./CardSection/CardSectionMini";
import CardSectionAside from "./CardSection/CardSectionAside";
import styles from "./Section.module.css";

const Section = ({ api }) => {
    return (
        <>
            <div className={styles.blocoNoticias}>

                <div>
                    {api.slice(2, 3).map((world, i) => (
                        <CardSection
                            key={i}
                            url={world.multimedia[1].url}
                            copyright={world.multimedia[1].copyright}
                            kicker={world.kicker}
                            title={world.title}
                            abstract={world.abstract}
                            byline={world.byline}
                        />
                    ))}
                </div>

                <div className={styles.verticalline}>
                </div>

                <div>
                    {api.slice(4, 5).map((world, i) => (
                        <CardSectionMini
                            key={i}
                            url={world.multimedia[1].url}
                            copyright={world.multimedia[1].copyright}
                            kicker={world.kicker}
                            title={world.title}
                            abstract={world.abstract}
                            byline={world.byline}
                        />
                    ))}
                </div>

                <div className={styles.verticalline}>
                </div>

                <div>
                    <div>
                        {api.slice(5, 6).map((world, i) => (
                            <CardSectionAside
                                key={i}
                                url={world.multimedia[1].url}
                                copyright={world.multimedia[1].copyright}
                                kicker={world.kicker}
                                title={world.title}
                                abstract={world.abstract}
                                byline={world.byline}
                            />
                        ))}
                    </div>
                    <div className={styles.horizontallLine}>
                    </div>
                    <div>
                        {api.slice(6, 7).map((world, i) => (
                            <CardSectionAside
                                key={i}
                                url={world.multimedia[1].url}
                                copyright={world.multimedia[1].copyright}
                                kicker={world.kicker}
                                title={world.title}
                                abstract={world.abstract}
                                byline={world.byline}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Section;
