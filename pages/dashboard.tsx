import { useContext, useEffect } from "react";
import type { NextPage } from "next"
import { authContext } from "../contexts/authContext";

const Dashboard: NextPage = () => {
    const userInfo = useContext(authContext);
    console.log("User", userInfo);

    return (
        <div>
            
        </div>
    )
}

export default Dashboard;