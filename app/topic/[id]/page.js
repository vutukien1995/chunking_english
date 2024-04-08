"use client"

import ChunkingCluster from "@components/ChunkingCluster"
import Chunks from "@components/Chunks"
import Extensions from "@components/Extensions"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default ({ params }) => {

    const [topic, setTopic] = useState()
    const { data: session } = useSession()

    useEffect(() => {
        const getTopic = async () => {
            try {
                const response = await fetch(`/api/topic/${params.id}`)
                const data = await response.json()

                setTopic(data)
            } catch (error) {
                alert(error.message)
            }
        }

        getTopic()
    }, [])


    return (
        <div className="main">
            <div className="w-full text-center">
                <h1 className="text-3xl font-bold">{topic?.name}</h1>
            </div>
            {topic &&
                <div>
                    <Chunks chunks={topic.chunks} />
                    <Extensions extensions={topic.extensions} />
                </div>
            }

            {topic && session && session.user?.id == topic.creator._id &&
                <div className="w-full text-right">
                    <a href={`/topic/update/${topic._id}`} className="btn btn-neutral">Update</a>
                </div>}

        </div>
    )
}