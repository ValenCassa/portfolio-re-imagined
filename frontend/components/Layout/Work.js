import Markdown from "../CreateTool/resources/Markdown"
import styles from '../../styles/SingleWork.module.css'
import BackLink from "./BackLink"

const Badge = ({ children, title }) => {

    return (
        <div className={styles.badge}>
        <h5 className={styles.badgeTitle}>{ title }</h5>
        <p className={styles.platform}>{ children }</p>
        </div>
    )
}

const Work = ({ value, file, title, platform, stack, website, date, previous, previousLink }) => {
    return (
        <div className={styles.content}>
            {title !== '' && <BackLink previous={previous} href={previousLink} title={title} />}
            <div style={file && { backgroundImage: `url(${file})`, backgroundSize: 'cover', backgroundPosition: 'center', width: "100%", height: '200px', borderRadius: '4px', marginBottom: '1em' }}/>
            {date !== 'Select a date' && <Badge title={'Date'}>{ date }</Badge>}
            {stack.length > 0 && <Badge title={'Stack'}>{ stack.join(', ') }</Badge>}
            {platform.length > 0 && <Badge title={'Platform'}>{ platform.join(', ') }</Badge>}
            {website !== '' && <Badge title={'Website'}><a href={website} className={styles.website}>{ website }</a></Badge>}
            <div className='markdown'>
                    <Markdown value={value}/>
            </div>
        </div>
    )
}

export default Work