import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const authContext = React.createContext();
const { Provider } = authContext;

type Props = {
    children: any;
}

const AuthProvider = ({ children }: Props) => {
    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserInfo(user);
            } else {
                console.log("User is not logged in");
            }
        })
    }, [])
    return <Provider value={userInfo}>{children}</Provider>;
}

export { authContext, AuthProvider };