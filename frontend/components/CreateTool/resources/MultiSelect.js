import CreatableSelect from 'react-select/creatable'
import styles from '../../../styles/MultiSelect.module.css'

const MultiSelect = ({ options, title, setState, defaultValue}) => {
    return (
        <>
        <h4 className={styles.multiTitle}>{title}</h4>
        <CreatableSelect defaultValue={defaultValue ? defaultValue.map(s => {return { label: s, value: s }}): undefined} isMulti options={options} onChange={setState} id='value-select' instanceId={'value-select'}
        classNamePrefix='react-select'
        />
        </>
    )
}

export default MultiSelect