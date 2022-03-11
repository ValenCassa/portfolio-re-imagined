import { useTheme } from "next-themes";

export const useDarkMode = (firstValue, secondValue) => {
    const { theme } = useTheme()
    const value = theme === 'light' ? firstValue : secondValue

    return value
}