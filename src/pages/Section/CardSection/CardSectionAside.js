import styles from './CardSection.module.css'

const CardSectionAside = ({ title, abstract, url, kicker, byline }) => {
    return (
        <div className={styles.cardSectionAside}>
            <div>
                <small>{kicker}</small>
                <h3>{title}</h3>
                <div>
                    <div>
                        <img src={url} alt="" />
                    </div>
                    <p>{abstract}</p>
                </div>
                <small>{byline}</small>
            </div>
        </div>
    )
}

export default CardSectionAside;