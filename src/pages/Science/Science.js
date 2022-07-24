import HeaderSection from '../../components/Header/HeaderSection/HeaderSection'
import List from '../../components/List/List'
import Section from '../Section/Section'
import styles from './Science.module.css'

const Science = ({api}) => {
  return (
    <>
    <HeaderSection section='SCIENCE'/>
    <div className={styles.sectionText}>
      <h1>Science</h1>
    </div>
    <div className={styles.sectionNav}>
      <ul>
        <List value='CLIMATE'/>
        <List value='SPACE AND ASTRONOMY'/>
        <List value='HEALTH'/>
        <List value='TRILOBITES'/>
        <List value='MATTER'/>
        <List value='OUT THERE'/>
        <List value='CORONAVIRUS OUTBREAK'/>
      </ul>
      <Section api={api} section="science"/>
    </div>
    </>
  )
}

export default Science