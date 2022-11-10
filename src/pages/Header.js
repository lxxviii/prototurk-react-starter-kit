import SwitchLanguage from '../component/SwitchLanguage';
import SwitchTheme from '../component/SwitchTheme';
import { useAuth } from '../context';

export default function Header() {

    const { user, dispatch } = useAuth();

    const login = () => {
        dispatch({
            type: 'LOGIN',
            payload: {
                id: 1,
                name: 'tayfun'
            }
        })
    };

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