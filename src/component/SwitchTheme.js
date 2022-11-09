import { useContext } from "react";
import {Context} from '../context/SiteContext';

export default function SwitchTheme() {

    const { theme, setTheme } = useContext(Context);
    const switchTheme = (() => (setTheme(theme === 'light' ? 'dark' : 'light')))

    return (
        <>
            <br />
            Mevcut Tema : {theme} <br />
            <button onClick={switchTheme}> Değiştir </button>
        </>
    )
}