import HeaderSection from '../../components/Header/HeaderSection/HeaderSection'
import List from '../../components/List/List'
import Section from '../../components/Section/Section'
import styles from './Tech.module.css'

const Tech = ({api}) => {
  return (
    <>
    <HeaderSection section='TECHNOLOGY'/>
    <div className={styles.sectionText}>
      <h1>Technology</h1>
    </div>
    <div className={styles.sectionNav}>
      <ul>
        <List value='DEALBOOK'/>
        <List value='MARKET'/>
        <List value='ECONOMY'/>
        <List value='ENERGY'/>
        <List value='MEDIA'/>
        <List value='TECHNOLOGY'/>
        <List value='PERSONAL TECH'/>
        <List value='SMALL BUSINESS'/>
        <List value='YOUR MONEY'/>
        <List value='MUTUAL FUND AND ETFS'/>
      </ul>
      <Section api={api}/>
    </div>
    </>
  )
}

export default Tech