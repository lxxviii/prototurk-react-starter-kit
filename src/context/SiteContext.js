import React, { createContext, useState } from "react";

const Context = createContext();

const Provider = ({ cildren }) => {

    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('tr');
    const data = { theme, setTheme, language, setLanguage }

    return (
        <Context.Provider value={data}>
            {cildren}
        </Context.Provider>
    );
}
export default Provider;