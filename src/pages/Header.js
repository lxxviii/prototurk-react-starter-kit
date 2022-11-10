import SwitchLanguage from '../component/SwitchLanguage';
import SwitchTheme from '../component/SwitchTheme';
import { useAuth } from '../context';

export default function Header() {

    const { user, dispatch } = useAuth();

    const login = () => {
        /* KULLANICI ADI VE ŞİFRE API'YE İLETİLİYOR*/
        dispatch({
            type: 'LOGIN',
            /* KULLANICI VE ŞİFRE BİLGİSİ API'DEN CEVAPLANIYOR */
            payload: {
                id: 1,
                name: 'tayfun'
            }
        })
    };

    /* KULLANICI ADI VE ŞİFRE OTURUMDAN SİLİNİYOR*/
    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        })
    }


    return (
        <header>
            HEADER <br />
            {(user && <button onClick={logout}> Çıkış Yap </button>) || <button onClick={login}> Giriş Yap </button>}
            <hr />
            <SwitchTheme />
            <SwitchLanguage />
        </header>
    )
}