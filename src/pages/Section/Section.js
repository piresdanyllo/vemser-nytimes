import List from "../../components/List/List";
import styles from "./Section.module.css";

const Section = () => {
  return (
    <div className={styles.section}>
        <h1>World News</h1>
        <ul>
            <List value="AFRICA"/>
            <List value="AMERICAS"/>
            <List value="ASIA"/>
            <List value="AUSTRALIA"/>
            <List value="CANADA"/>
            <List value="EUROPE"/>
            <List value="MIDDLE EAST"/>
        </ul>
        
        
    </div>
  )
}

export default Section;