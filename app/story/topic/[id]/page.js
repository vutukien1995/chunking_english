"use client"

import { useEffect, useState } from "react"

export default ({ params }) => {
    const [topic, setTopic] = useState()

    useEffect(() => {
        const getTopic = async () => {
            let t = await import('@utils/story/' + params.id);
            setTopic(t.default)
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
                    {topic.chunks?.map((chunk, index) => (
                        <div className="bg-blue-950/10 my-4 p-5 rounded-md border border-white">
                            <h3 className="mb-5 font-bold underline">Chunking Cluster:</h3>
                            <p className="mb-2 font-bold text-lg">Key:  {chunk.question}</p>
                            <ul className="list-disc ml-8">
                                {chunk.answers.map((a, i) => (
                                    <li className="mb-2" key={i}>{a}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="bg-green-950/20 my-4 p-5 rounded-md border border-white">
                        <h3 className="mb-5 font-bold underline">Extensions:</h3>
                        <ul className="list-disc ml-8">
                            {topic.extensions?.map((e, i) => (
                                <li className="mb-2" key={i}>{e.content + ' : ' + e.description}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </div>
    )

}