import React, { createContext, useState } from "react";

const Context = createContext();

const Provider = ({ cildren }) => {

    const [user, setUser] = useState('light');

    const data = { user, setUser }

    return (
        <Context.Provider value={data}>
            {cildren}
        </Context.Provider>
    );
}
export default Provider;