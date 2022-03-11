import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"
import { useDarkMode } from "../../../hooks/useDarkMode"

const AnimatedBox = ({ children }) => (
    <motion.div
        style={{ display: 'inline-block' }}
        key={ useDarkMode('light', 'dark') }
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
    >
        { children }
    </motion.div>
)

const ThemeToggleButton = () => {
    const { theme, setTheme } = useTheme()

    const onClick = () => setTheme(theme === 'dark' ? 'light': 'dark') 

    return (
        <AnimatePresence exitBeforeEnter initial={ false }>
            <AnimatedBox>
                
                <button className="toggleButton" onClick={onClick}>
                    <div className="svg"></div>
                </button>
            </AnimatedBox>
        </AnimatePresence>
    )
}

export default ThemeToggleButton