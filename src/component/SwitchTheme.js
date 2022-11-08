import { useContext } from "react";
import ThemeContext from '../context/ThemeContext';

export default function SwitchTheme() {

    const { theme, setTheme } = useContext(ThemeContext);

    const switchTheme = (() => (setTheme(theme === 'light' ? 'dark' : 'light')))

    return (
        <>
            <br />
            Mevcut Tema : {theme} <br />
            <button onClick={switchTheme}> Değiştir </button>
        </>
    )
}