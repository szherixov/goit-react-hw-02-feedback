import styles from './statistics.module.css'

function Statistics({ good, neutral, bad, total, positivePercentage }){
    return <ul className={styles.container}>
    <li><p className={styles.item}>Good:{good}</p></li>
    <li><p className={styles.item}>Neutral:{neutral}</p></li>
    <li><p className={styles.item}>Bad:{bad}</p></li>
    <li><p className={styles.item}>Total:{total}</p></li>
    <li><p className={styles.item}>Positive feedback:{positivePercentage}%</p></li>
</ul>;
}

export default Statistics;