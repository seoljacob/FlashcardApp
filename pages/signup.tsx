import React, { useReducer } from "react";
import type { NextPage } from "next";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/index";
import formReducer from "../reducer/formReducer";

const SignUp: NextPage = () => {
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
            createUserWithEmailAndPassword(auth, formState.email, formState.password).then((userCredential) => {
                const user = userCredential.user;
                console.log("User", user);
                console.log("Sign up successful!");
            })
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error code: " + errorCode + " " + errorMessage);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" value={formState.email} onChange={(e) => handleInputTextChange(e)} />
            <input type="password" name="password" placeholder="Password" value={formState.password} onChange={(e) => handleInputTextChange(e)} />
            <input className="hover:cursor-pointer" type="submit" value="Sign up" />
        </form>
    )
}

export default SignUp;