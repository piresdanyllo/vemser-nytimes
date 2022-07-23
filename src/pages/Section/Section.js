import CardSection from "../../components/Card/CardSection/CardSection";
import HeaderSection from "../../components/Header/HeaderSection/HeaderSection";
import List from "../../components/List/List";
import styles from "./Section.module.css";

const Section = ({api, section}) => {

  return (
    <>
    <HeaderSection />
    <div className={styles.section}>
        <h1>{section}</h1>
        
        <nav>
        <ul>
                <List value="AFRICA"/>
                <List value="AMERICAS"/>
                <List value="ASIA"/>
                <List value="AUSTRALIA"/>
                <List value="CANADA"/>
                <List value="EUROPE"/>
                <List value="MIDDLE EAST"/>
            </ul>  
          {/* {section === 'world' && 
            <ul>
                <List value="AFRICA"/>
                <List value="AMERICAS"/>
                <List value="ASIA"/>
                <List value="AUSTRALIA"/>
                <List value="CANADA"/>
                <List value="EUROPE"/>
                <List value="MIDDLE EAST"/>
            </ul>        
          }
          {section === 'technology' && 
            <ul>
                <List value="teste"/>
                <List value="AMERIfdfgCAS"/>
                <List value="ASgffghjIA"/>
                <List value="fgfg"/>
                <List value="jjjj"/>
                <List value="yyyyy"/>
                <List value="yyyy EAST"/>
            </ul>        
          } */}
        </nav>

        {api.slice(1, 5).map((world, i) => (
          <CardSection 
          key={i} 
          title={world.title}
          abstract={world.abstract}
          url={world.multimedia[1].url}
          copyright={world.multimedia[1].copyright}/>
        ))}

    </div>
    </>
  )
}

export default Section;