import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { authContext, AuthProvider } from "../../contexts/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { SignInButton, SignOutButton, SignUpButton } from "../Shared/Buttons";

interface Props {
    children?: any;
}

export const Layout: React.FC<Props> = ({ children }) => {
    const userInfo = useContext(authContext);
    const router = useRouter();
    const handleSignOut = () => {
      signOut(auth).then(() => {
        console.log("Sign out successful");
        router.push("/");
      }).catch((error) => {
        console.log("Error", error);
      }
    )}

    console.log("Layout", userInfo);

    return (
        <>
            <div>
                {
                    router.pathname === "/login" || router.pathname === "/signup"
                    ? null
                    : userInfo
                    ? <SignOutButton onClickHandle={handleSignOut}/>
                    :   <div className="flex flex-between gap-4">
                            <SignUpButton />
                            <SignInButton />
                        </div>
                }
            </div>
            <main>
                {
                    children ? children : null
                }
            </main>
        </>
    )
} 