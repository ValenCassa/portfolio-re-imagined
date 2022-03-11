import {default as Sel} from 'react-select'
import styles from '../../../styles/Select.module.css'


const Select = ({ options, onChange, title, defaultValue }) => {
    const boolean = () => {
        if ((typeof defaultValue) === 'boolean') {
            const value = defaultValue ? {label: 'Yes', value: true}: { label: 'No', value: false }
            return value
        } else {
            return { label: defaultValue, value: defaultValue }
        }
    }
    return (
        <>
        <h4 className={styles.selectTitle}>{title}</h4>
        <Sel defaultValue={defaultValue ? boolean(): undefined} options={options} classNamePrefix='react-select' onChange={onChange} instanceId={'value-select'}/>
        </>
    )
}

export default Select