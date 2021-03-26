import React, { useContext } from 'react';
import { Context } from "./Context"

const Component2 = () => {

    const { auth } = useContext(Context);
    const [ isAuth ] = auth;

    return (
        <>
        <h1>component2</h1>
        {isAuth<0 && <p>JestemFajny</p>}
        <h1>{isAuth}</h1>
        </>
    )
}

export default Component2;