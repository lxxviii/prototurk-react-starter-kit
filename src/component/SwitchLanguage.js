import { useContext } from "react";
import LanguageContext from '../context/LanguageContext';

export default function SwitchLanguage() {

    const { language, setLanguage } = useContext(LanguageContext);

    const switchLanguage = (() => setLanguage(language === 'tr' ? 'en' : 'tr'))

    return (
        <>
            <br />
            Mevcut Dil : {language} <br />
            <button onClick={switchLanguage}> Değiştir </button>
        </>
    )
}