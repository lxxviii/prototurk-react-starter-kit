import SwitchLanguage from '../component/SwitchLanguage';
import SwitchTheme from '../component/SwitchTheme';
import { useAuth } from '../context';

export default function Header() {

    const {user, setUser} = useAuth();

    const login = () => {
        setUser({
            name: 'tayfun',
            id:1
        })
    };

    const logout = () => {
        setUser(false);
    }


    return (
        <header>
            HEADER <br />
            {(user && <button onClick={logout}> Çıkış Yap </button>) || <button onClick={login}> Giriş Yap </button>}
            <hr/>
            <SwitchTheme />
            <SwitchLanguage />
        </header>
    )
}