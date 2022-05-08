import { useContext, useEffect, useState } from "react";
import type { NextPage } from "next"
import { authContext } from "../../contexts/authContext";
import { Card } from "../../components/Card";
import { useRouter } from "next/router";

const Dashboard: NextPage = () => {
    const userInfo = useContext(authContext);
    const router = useRouter();

    useEffect(() => {
        if (!userInfo) {
          router.push("/")
        }
      }, [userInfo, router])

    return (
        <div>
            /Dashboard
            <Card />
        </div>
    )
}

export default Dashboard;