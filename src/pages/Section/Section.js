import CardSection from "../../components/Card/CardSection/CardSection";
import styles from "./Section.module.css";

const Section = ({ api }) => {
  return (
    <>
      {api.slice(2, 6).map((world, i) => (
        <CardSection
          key={i}
          title={world.title}
          abstract={world.abstract}
          url={world.multimedia[1].url}
          copyright={world.multimedia[1].copyright}
        />
      ))}
    </>
  );
};

export default Section;
