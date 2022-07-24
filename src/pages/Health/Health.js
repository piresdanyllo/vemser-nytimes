import HeaderSection from '../../components/Header/HeaderSection/HeaderSection'
import List from '../../components/List/List'
import Section from '../../components/Section/Section'
import styles from './Health.module.css'

const Health = ({api}) => {
  return (
    <>
    <HeaderSection section='HEALTH'/>
    <div className={styles.sectionText}>
      <h1>Health</h1>
    </div>
    <div className={styles.sectionNav}>
      <ul>
        <List value='HEALTH POLICY'/>
        <List value='GLOBAL HEALTH'/>
        <List value='THE NEW OLD AGE'/>
        <List value='SCIENCE'/>
        <List value='WELL'/>
        <List value='CORONAVIRUS OUTBREAK'/>
      </ul>
      <Section api={api}/>
    </div>
    </>
  )
}

export default Health