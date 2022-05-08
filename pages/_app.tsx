import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { useRouter } from "next/router";
import { AuthProvider } from "../contexts/authContext";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout> 
    </AuthProvider>
  )
}

export default MyApp
