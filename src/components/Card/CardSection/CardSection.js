import styles from './CardSection.module.css'

const CardSection = ({ title, abstract, url, copyright }) => {
  return (
    <div className={styles.cardSection}>
      <div>
        <img src={url} alt="" />
        <small>{copyright}</small>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{abstract}</p>
      </div>
    </div>
  )
}



export default CardSection;