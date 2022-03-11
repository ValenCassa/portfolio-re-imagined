import { SpinnerDotted } from 'spinners-react'
import styles from '../../../styles/SubmitButton.module.css'

const SubmitButton = ({ condition, title, submitted }) => {

    const buttonRender = submitted ? <SpinnerDotted size={25} color={'white'} />: (condition ? ((String(title) === 'Create Work' || String(title) === 'Create Post') ? 'Create': 'Update'): 'Complete missing fields')
    return (
        <>
        <button type="submit" className={styles.submit} disabled={!condition}>{buttonRender}</button> 
        </>
    )
}

export default SubmitButton