import { createContext, useState } from 'react';

export const Context = createContext("random data");

export const ContextProvider = (props) => {
    const [isAuth, setAuth] = useState(0);
    const randomData="randomData";

    return(
        <Context.Provider value={{auth: [isAuth, setAuth],rd: randomData}}>
            {props.children}
        </Context.Provider>
    );
}

