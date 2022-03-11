import { useEffect } from 'react'

export const useOutsideRef = (ref, setActive) => { 
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setActive(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }

    }, [ref, setActive])
}