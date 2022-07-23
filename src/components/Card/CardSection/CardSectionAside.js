import styles from './CardSection.module.css'

const CardSectionAside = ({ title, abstract, url, copyright, kicker, byline }) => {
    return (
        <div className={styles.cardSectionMiniAside}>
            <div>
                <h3>{title}</h3>
                <p>{abstract}</p>
                <img src={url} alt="" />
                <small>{byline}</small>
            </div>
        </div>
    )
}

export default CardSectionAside;