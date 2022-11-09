import { useContext } from "react";
import SiteContext, {Context} from '../context/SiteContext';

export default function SwitchLanguage() {

    const { language, setLanguage } = useContext(Context);

    return (
        <>
            <br />
            Mevcut Dil : {language} <br />
            <button onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}> Değiştir </button>
        </>
    )
}