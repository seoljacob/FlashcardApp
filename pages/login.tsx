import React, { useReducer } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/index";
import formReducer from "../reducer/formReducer";

const Login: NextPage = () => {
    const router = useRouter();
    const initialFormState = {
        email: "",
        password: ""
    }
    const [formState, dispatch] = useReducer(formReducer, initialFormState);
    const handleInputTextChange = (e: any) => {
        dispatch({
            type: "Handle input text",
            field: e.target.name,
            payload: e.target.value
        })
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            signInWithEmailAndPassword(auth, formState.email, formState.password).then((userCredential) => {
                const user = userCredential.user;
                router.push({
                    pathname: `/dashboard/[user_id]`,
                    query: {user_id: user.uid},
                });
                console.log("User", user);
                console.log("Login successful!");
            })
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error code: " + errorCode + " " + errorMessage);
        }
    }

    return (
        <div>
            /Login
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={formState.email} onChange={(e) => handleInputTextChange(e)} />
                <input type="password" name="password" placeholder="Password" value={formState.password} onChange={(e) => handleInputTextChange(e)} />
                <input className="hover:cursor-pointer" type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;