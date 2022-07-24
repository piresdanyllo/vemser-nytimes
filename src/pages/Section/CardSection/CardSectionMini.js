import styles from './CardSection.module.css'

const CardSectionMini = ({ url, copyright, kicker, title, abstract, byline }) => {
    return (
        <div className={styles.cardSectionMini}>
            <div>
                <img src={url} alt="" />
                <small>{copyright}</small>
            </div>
            <div>
                <small>{kicker}</small>
                <h3>{title}</h3>
                <p>{abstract}</p>
                <small>{byline}</small>
            </div>
        </div>
    )
}

export default CardSectionMini;