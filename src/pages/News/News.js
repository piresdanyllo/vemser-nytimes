import HeaderSection from '../../components/Header/HeaderSection/HeaderSection'
import styles from './News.module.css'

const News = () => {
  return (
    <>
    <HeaderSection/>
    <div className={styles.newsContainer}>
        <h2>kicker</h2>
        <h1>title</h1>
        <p>abstract</p>
        <img src="" alt="" />
        <small>caption copyright</small>
        <p>abstract</p>
    </div>
    </>
  )
}

export default News