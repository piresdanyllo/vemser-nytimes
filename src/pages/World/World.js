import HeaderSection from '../../components/Header/HeaderSection/HeaderSection'
import List from '../../components/List/List'
import Section from '../../components/Section/Section'
import styles from './World.module.css'

const World = ({api}) => {
  return (
    <>
    <HeaderSection section='WORLD'/>
    <div className={styles.sectionText}>
      <h1>World</h1>
    </div>
    <div className={styles.sectionNav}>
      <ul>
        <List value='AFRICA'/>
        <List value='AMERICAS'/>
        <List value='ASIA'/>
        <List value='AUSTRALIA'/>
        <List value='CANADA'/>
        <List value='EUROPE'/>
        <List value='MIDDLE EAST'/>
      </ul>
      <Section api={api}/>
    </div>
    </>
  )
}

export default World