import {useSite} from '../context/SiteContext'

export default function SwitchTheme() {

    const { theme, setTheme } = useSite();
    const switchTheme = (() => (setTheme(theme === 'light' ? 'dark' : 'light')))

    return (
        <>
            <br />
            Mevcut Tema : {theme} <br />
            <button onClick={switchTheme}> Değiştir </button>
        </>
    )
}