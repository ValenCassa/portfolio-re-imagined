import styles from '../../../styles/GroupData.module.css'

const GroupData = ({ leftItem, rightItem }) => {
    return (
        <div className={styles.flexData}>
            <div className={styles.flexLeft}>
                {leftItem}
            </div>
            <div className={styles.flexRight}>
                {rightItem}
            </div>
        </div>
    )
}

export default GroupData