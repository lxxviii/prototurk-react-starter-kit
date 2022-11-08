import SwitchLanguage from './SwitchLanguage';
import SwitchTheme from './SwitchTheme';

export default function Header({ theme, setTheme, language, setLanguage }) {

    return (
        <>
            HEADER <br />
            <SwitchTheme theme={theme} setTheme={setTheme} />
            <SwitchLanguage language={language} setLanguage={setLanguage} />
        </>
    )
}