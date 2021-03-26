import React, { useContext } from 'react';
import { Context } from "./Context"

const Component1 = () => {

    const { auth} = useContext(Context);
    const [ isAuth, setAuth ] = auth;

    return (
        <>
        <h1>component1</h1>
        {isAuth>0 && <p>JestemFajny</p>}
        <h1>{isAuth}</h1>
        <button onClick={()=>setAuth((isAuth)=>isAuth-1)}>Odejmij</button>
        </>
    )
}

export default Component1;