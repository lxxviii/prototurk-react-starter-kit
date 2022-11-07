import { useContext } from "react";
import SiteContext from '../context/SiteContext';

export default function SwitchTheme() {

    const {theme , setTheme} = useContext(SiteContext);

    return (
        <>
        Mevcut Theme : {theme}
            <br />
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Tema Değiştir
            </button>
            {/*user ? <button onClick={logout} > Çıkış Yap </button> : <button onClick={login}> Giriş Yap</button>*/}
            <hr />
            <br />
        </>
    )
}