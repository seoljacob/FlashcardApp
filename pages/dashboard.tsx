import { useContext, useEffect } from "react";
import type { NextPage } from "next"
import { authContext } from "../contexts/authContext";

const Dashboard: NextPage = () => {
    const userInfo = useContext(authContext);
    useEffect(() => {
        if (userInfo) {
            console.log("User", userInfo);
        }
    }, [userInfo])

    return (
        <div>
            
        </div>
    )
}

export default Dashboard;