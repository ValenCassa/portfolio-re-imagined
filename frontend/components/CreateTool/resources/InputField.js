import styles from '../../../styles/InputField.module.css'

const InputField = ({ title, onChange, value }) => {
    return (
        <>
        <h4 className={styles.title}>{title}</h4>
        <div>
            <input value={value} className={styles.input} onChange={ onChange } name={ title.toLowerCase() }/>
        </div>
        </>
    )
}

export default InputField