import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";

export default function Footer({ theme, setTheme, language, setLanguage }) {

    return (
        <>
            FOOTER <br />
            <SwitchTheme theme={theme} setTheme={setTheme} />
            <SwitchLanguage language={language} setLanguage={setLanguage} />
        </>
    )
}