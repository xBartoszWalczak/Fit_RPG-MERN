import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../subcomponents/navbar/Navbar';

const PrivateScreen = ({ history }) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
        if(!localStorage.getItem("authToken")){
            history.push("/login");
        }
        const fetchPrivateData = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            }

            try{
                const { data } = await axios.get("/api/private", config);
                setPrivateData(data.data);
            }catch(err){
                localStorage.removeItem("authToken");
                setError("Not authorized");
            }
        }

        fetchPrivateData();
    }, [history]);

    return(
        <div>
            {error && history.push("/login")}

            <Navbar isAuth={true}/>
            <div style={{ background: "green", color: "white", position: 'relative'}}>{privateData}</div>
        </div>
    );
}

export default PrivateScreen;