export default function SwitchLanguage({ language, setLanguage }) {

    const switchLanguage = (() => setLanguage(language === 'tr' ? 'en' : 'tr'))

    return (
        <>
            <br />
            Mevcut Dil : {language} <br />
            <button onClick={switchLanguage}> Değiştir </button>
        </>
    )
}