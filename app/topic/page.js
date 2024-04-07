"use client"

import Card from "@components/Card";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Topic() {

    const { data: session, status } = useSession()
    const [topics, setTopics] = useState()

    useEffect(() => {
        const getTopic = async () => {
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

    if (status == 'loading')
        return <div className="main">
            <div className="w-full text-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        </div>

    return (
        <div className="main">
            {!session && (
                <div className="w-full text-center">
                    <p>Login to see your Topics</p>
                </div>
            )}

            {session && (
                <>
                    <div className="w-full text-center mb-14">
                        <h1 className="font-bold text-3xl">Your topic</h1>
                    </div>

                    <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-24">
                        {topics?.map((t, i) => (
                            <Card key={i} title={t.name} link={'/topic/' + t._id} />
                        ))}
                    </div>

                    <div className="w-full text-right">
                        <a href="/topic/create" className="btn btn-primary mr-4">Create Topic</a>
                        <a href="/topic/ai_find" className="btn btn-primary">Let's AI help you!</a>
                    </div>
                </>
            )}
        </div>
    );
}