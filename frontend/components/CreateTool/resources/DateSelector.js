import { useRef, useState } from 'react'
import Calendar from 'react-calendar'
import { useOutsideRef } from '../../../hooks/useOutsideRef'
import styles from '../../../styles/Calendar.module.css'

const DateSelector = ({ date, formatedDate, setDate, setData, data }) => {
    const [active, setActive] = useState(false)
    const calendarRef = useRef(null)


    const openCalendar = (e) => {
        e.preventDefault()
        setActive(!active)
    }
    useOutsideRef(calendarRef, setActive)

    const onDate = (value, event) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        setDate(value)
        setData({ ...data, date: value.toLocaleString('en-GB', options) })
    }
    
    return (
        <div>
            <h4 className={styles.dateTitle}>Select date</h4>
            <div className='calendar-container' ref={calendarRef} >
                <button className={styles.dateOpener} onClick={openCalendar}>{formatedDate}</button>
                <div className={styles.calendar} id={active ? undefined : `${styles.closedCalendar}`}>
                    <Calendar onChange={(value, event) => onDate(value, event)} value={date} locale='en'/>
                </div>
            </div>
        </div>
    )
}

export default DateSelector