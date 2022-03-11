import { useHotkeys } from 'react-hotkeys-hook'
import styles from '../../../styles/TextArea.module.css'

const code = `~~~js

~~~`

const lineBreak = `  
`

const KeyboardShortcuts = () => {
    return (
        <div className={styles.shortcutContainer}>
            <p className={styles.shortcut}>Ctrl + B: Bold</p>
            <p className={styles.shortcut}>Ctrl + Q: Highlight</p>
            <p className={styles.shortcut}>Ctrl + ]: Code</p>
            <p className={styles.shortcut}>Ctrl + i: Italic</p>
            <p className={styles.shortcut}>Ctrl + Enter: Line Break</p>
            <p className={styles.shortcut}>Alt + i: Image</p>
        </div>
    )
}

const TextArea = ({ onChange, value, setInput }) => {

    useHotkeys('ctrl+b', () => setInput(prevValue => { return {...prevValue, content: value + '**'} }), { enableOnTags: ['TEXTAREA'] })
    useHotkeys('ctrl+q', () => setInput(prevValue => { return {...prevValue, content: value + '<mark></mark>'} }), { enableOnTags: ['TEXTAREA']})
    useHotkeys('ctrl+]', () => setInput(prevValue => { return {...prevValue, content: value + code} }), { enableOnTags: ['TEXTAREA']})
    useHotkeys('ctrl+i', () => setInput(prevValue => { return {...prevValue, content: value + '*'} }), { enableOnTags: ['TEXTAREA']})
    useHotkeys('alt+i', () => setInput(prevValue => { return {...prevValue, content: value + '[![Foo](url)](link)'} }), { enableOnTags: ['TEXTAREA']})
    useHotkeys('ctrl + enter', () => setInput(prevValue => { return {...prevValue, content: value + lineBreak} }), { enableOnTags: ['TEXTAREA']})

    return (
        <div>
            <h4 className={styles.title}>Content</h4>
            <KeyboardShortcuts />
            <div>
                <textarea className={styles.textarea} value={value} onChange={onChange} />
            </div>
        </div>
    )
}

export default TextArea