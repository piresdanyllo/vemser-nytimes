import HeaderSection from '../../components/Header/HeaderSection/HeaderSection'
import List from '../../components/List/List'
import Section from '../Section/Section'
import styles from './Politics.module.css'

const Politics = ({api}) => {
  return (
    <>
    <HeaderSection section='POLITICS'/>
    <div className={styles.sectionText}>
      <h1>Politics</h1>
    </div>
    <div className={styles.sectionNav}>
      <ul>
        <List value='JOE BIDEN'/>
        <List value='2022 MIDTERM ELECTIONS'/>
      </ul>
      <Section api={api}/>
    </div>
    </>
  )
}

export default Politics