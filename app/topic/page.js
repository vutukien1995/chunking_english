"use client"

import Card from "@components/Card";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Topic() {

    const { data: session } = useSession()
    const [topics, setTopics] = useState()

    useEffect(() => {
        const getTopic = async () => {
            console.log('getTopic:')
            if (!session)
                return

            try {
                let url = `/api/topic/user/${session?.user.id}`
                console.log('url: ', url)
                const response = await fetch(url)
                const data = await response.json()
                console.log('data: ', data)
                setTopics(data)
            } catch (error) {
                console.log(error.message)
            }
        }

        getTopic()
    }, [session])


    return (
        <div className="main">
            {!session && (
                <div className="w-full text-center">
                    <p>Login to see your Topics</p>
                </div>
            )}



            {session &&
                <>
                    <div className="w-full text-right">
                        <a href="/topic/create" className="btn btn-primary">Create Topic</a>
                    </div>
                    <div className="w-full text-center mb-14">
                        <h1 className="font-bold text-3xl">Your topic</h1>
                    </div>
                </>

            }

            {session && (
                <div className="w-full grid grid-cols-5 gap-4">
                    {topics?.map((t, i) => (
                        <Card title={t.name} link={'/topic/' + t._id} />
                    ))}
                </div>
            )}
        </div>
    );
}