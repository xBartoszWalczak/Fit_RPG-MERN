import React, { useContext, useState } from 'react';
import { Context } from "./Context"

import Component1 from "./Component1"
import Component2 from "./Component2"
import { createPortal } from 'react-dom';
import Navbar from "../../src/components/subcomponents/navbar/Navbar";

const Component3 = () => {

    const { auth } = useContext(Context);
    const [ isAuth, setAuth ] = auth;
    const [compRender, setCompRender] = useState(false);
    return (
        <>
        <Navbar isAuth={false}/>
        <h1>component3</h1><br/>
        <h1>--c1--</h1>
        <Component1/><br/>
        <h1>--c2--</h1>
        {compRender ? <><Component2/><br/></> : null}
        <button onClick={()=>setCompRender((compRender)=>!compRender)}>render comp2</button>
        <h1>-----component3-----</h1>
        <h1>{isAuth}</h1>
        <button onClick={()=>setAuth((isAuth)=>isAuth+1)}>BUTTON</button>
        </>
    )
}

export default Component3;