import Markdown from "../CreateTool/resources/Markdown";
import styles from '../../styles/Post.module.css'
import BackLink from "./BackLink";

const Post = ({ value, file, title, date, type, previous, previousLink }) => {
    return (
        <div className={styles.content}>
            <div className={styles.header}>
                {title !== '' && <BackLink previous={previous} href={previousLink} title={title} />}
                {date !== 'Select a Date' && <div className={styles.container}><p className={styles.badge}>{date}</p></div>}
                {type !== '' && <div className={styles.container}><p className={styles.badge} id={styles.type}>{type}</p></div>}
            </div>
            <div style={file && {backgroundImage: `url(${file})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '200px', borderRadius: '4px', marginBottom: '1em', marginTop: '1em' }}/>
            <div className="markdown">
                <Markdown value={value} />
            </div>
        </div>
    )
}
export default Post