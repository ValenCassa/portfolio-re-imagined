import styles from '../../styles/BackLink.module.css'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

const BackLink = ({ href, previous, title }) => {
    return (
        <div>
        <Link href={href} passHref>
            <a className={styles.backLink}>
                { previous }
            </a>
        </Link>
            <IoIosArrowForward className={styles.arrow} />
            <h3 className={styles.title}>{ title }</h3>
        </div>
    )
}

export default BackLink