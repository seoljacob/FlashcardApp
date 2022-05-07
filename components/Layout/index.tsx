import { useContext } from "react";
import { useRouter } from "next/router";
import { authContext, AuthProvider } from "../../contexts/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

interface Props {
    children?: any;
}

export const Layout: React.FC<Props> = ({ children }) => {
    const router = useRouter();
    const handleSignOut = () => {
      signOut(auth).then(() => {
        console.log("Sign out successful")
        router.push("/");
      }).catch((error) => {
        console.log("Error", error);
      }
    )}
    return (
        <AuthProvider>
            <div>
                <button onClick={() => handleSignOut()}>Sign out</button>
            </div>
            <main>
                {
                    children ? children : null
                }
            </main>
        </AuthProvider>
    )
} 