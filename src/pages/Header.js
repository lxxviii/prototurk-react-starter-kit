import React from 'react';
import SwitchTheme from '../switch/SwitchTheme';
import SwitchLanguage from '../switch/SwitchLanguage';
//import { useAuth } from '../context/AuthContext';

function Header() {

    /*const { user, setUser } = useAuth();

    const login = () => {
        setUser({
            name: 'tayfun', id: 1
        })
    }

    const logout = () => {
        setUser(false);
    }*/

    return (
        <header >
            <hr />
            HEADER
            <br />
            <SwitchTheme />
            <SwitchLanguage />
        </header>
    )
}

export default Header;