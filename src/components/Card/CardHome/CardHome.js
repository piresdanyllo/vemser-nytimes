import styles from './CardHome.module.css'

const CardHome = ({title, abstract, url, caption, copyright}) => {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardText}>
            <h3>{title}</h3>
            <p>{abstract}</p>
        </div>
        <div className={styles.cardImg}>
            <img src={url} alt="" />
            <small>{caption} {copyright}</small>
        </div>
    </div>
  )
}

export default CardHome