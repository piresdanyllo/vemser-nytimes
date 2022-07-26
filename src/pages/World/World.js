import HeaderSection from '../../components/Header/HeaderSection/HeaderSection'
import List from '../../components/List/List'
import Section from '../Section/Section'
import styles from './World.module.css'

const World = ({api}) => {
  return (
    <>
    <HeaderSection section='WORLD NEWS'/>
    <div className={styles.sectionText}>
      <h1>World News</h1>
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
      <Section api={api} section="world"/>
    </div>
    </>
  )
}

export default World