import Link from "next/link"

export const SignInButton: React.FC = () => {
    return (
        <Link href="/login">
            <a className="border border-black px-4 py-2">
                Sign in
            </a>
        </Link>
    )
}

type SignOutButtonProps = {
    onClickHandle?: any;
}
export const SignOutButton: React.FC<SignOutButtonProps> = ({ onClickHandle }) => {
    return (
        <button className ="border border-black px-4 py-2" onClick={onClickHandle}>Sign out</button>
    )
}

export const SignUpButton: React.FC = () => {
    return (
        <Link href="/signup">
            <a className="border border-black px-4 py-2">
                Sign up
            </a>
        </Link>
    )
}