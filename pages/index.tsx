import { useContext, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { authContext } from "../contexts/authContext";

const Home: NextPage = () => {
  const userInfo = useContext(authContext);
  const router = useRouter();
  useEffect(() => {
    if (userInfo) {
      router.push({
        pathname: "/dashboard/[user_id]",
        query: {user_id: userInfo.uid}
      })
    }
  }, [userInfo, router])

  return (
    <div>
      /Home
    </div>
  )
}

export default Home
