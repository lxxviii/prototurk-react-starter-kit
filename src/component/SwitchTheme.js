import { useContext } from "react";
import SiteContext from '../context/SiteContext';

export default function SwitchTheme() {

    const { theme, setTheme } = useContext(SiteContext);

    const switchTheme = (() => (setTheme(theme === 'light' ? 'dark' : 'light')))

    return (
        <>
            <br />
            Mevcut Tema : {theme} <br />
            <button onClick={switchTheme}> Değiştir </button>
        </>
    )
}