import styles from '../../../styles/Preview.module.css'
import { BluredContainer } from '../../Layout/Containers'

const Preview = ({ children }) => {
    return (
        <div className={styles.preview}>
            <BluredContainer>
                <h4 className={styles.previewTitle}>Preview</h4>
                { children }
            </BluredContainer>    
        </div>
    )
}

export default Preview