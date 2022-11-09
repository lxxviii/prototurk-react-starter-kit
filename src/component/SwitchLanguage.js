import { useSite } from "../context";

export default function SwitchLanguage() {

    const { language, setLanguage } = useSite();
    const switchLanguage = (() => setLanguage(language === 'tr' ? 'en' : 'tr'))

    return (
        <>
            <br />
            Mevcut Dil : {language} <br />
            <button onClick={switchLanguage}> Değiştir </button>
        </>
    )
}