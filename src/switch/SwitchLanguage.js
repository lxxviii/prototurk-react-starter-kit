import { useContext } from "react";
import SiteContext from '../context/SiteContext';


export default function SwitchLanguage() {

    const {language, setLanguage} = useContext(SiteContext)
    return (
        <>
            Mevcut Dil : {language}
            <br />
            <button onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}>
                Dil Değiştir
            </button>
            {/*user ? <button onClick={logout} > Çıkış Yap </button> : <button onClick={login}> Giriş Yap</button>*/}
            <hr />
            <br />
        </>

    )
}