import { useRef, useState } from "react"
import { useOutsideRef } from "../../../hooks/useOutsideRef"

const DropdownMenu = ({ children, mobile, icon }) => {
    const [active, setActive] = useState(false)
    const menuRef = useRef(null)

    useOutsideRef(menuRef, setActive)

    return (
        <div className='menuRoot' id={mobile === true ? 'mobile': undefined} ref={menuRef}>
            <button className='menuButton' onClick={() => setActive(!active)}>{icon}</button>
            <div className='menuBody' id={active ? 'active': undefined}>
                {children}
            </div>
        </div>
    )
}

export default DropdownMenu