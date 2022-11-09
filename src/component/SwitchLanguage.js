import { useContext } from "react";
import SiteContext from '../context/SiteContext';

export default function SwitchLanguage() {

    const { language, setLanguage } = useContext(SiteContext);

    const switchLanguage = (() => setLanguage(language === 'tr' ? 'en' : 'tr'))

    return (
        <>
            <br />
            Mevcut Dil : {language} <br />
            <button onClick={switchLanguage}> Değiştir </button>
        </>
    )
}