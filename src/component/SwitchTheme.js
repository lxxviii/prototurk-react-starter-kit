import { useContext } from "react";
import SiteContext, {Context} from '../context/SiteContext';

export default function SwitchTheme() {

    const { theme, setTheme } = useContext(Context);

    return (
        <>
            <br />
            Mevcut Tema : {theme} <br />
            <button onClick={() => (setTheme(theme === 'light' ? 'dark' : 'light'))}> Değiştir </button>
        </>
    )
}