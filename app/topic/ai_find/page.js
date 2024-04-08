"use client"

import { useSession } from "next-auth/react";
import { useState } from "react";

export default () => {

    const { data: session } = useSession()

    const [topic, setTopic] = useState('')
    const [level, setLevel] = useState('Ielts 5.0')
    const [answerNumb, setAnswerNumb] = useState('3')

    const [aiTopic, setAiTopic] = useState()
    const [submitting, setSubmitting] = useState(false)
    const [submitting2, setSubmitting2] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        let text = ''

        try {
            const response = await fetch("/api/gemini", {
                method: "POST",
                body: JSON.stringify({
                    topic: topic,
                    level: level,
                    answerNumb: answerNumb
                })
            })
            const data = await response.json()
            console.log('data: ', data)

            if (response.ok) {
                text = data.answer
            } else {
                let err = await response.text()
                alert(response.status + ' - ' + err)
                return
            }
        } catch (error) {
            console.log(error)
            alert('Ops! Something wrong with AI server! Pls try later!')
            return
        } finally {
            setSubmitting(false)
        }

        let gemini_answer = {}
        try {
            gemini_answer = JSON.parse(text)
        } catch (error) {
            console.log(error.message)
            alert("The topic is a bit challenging! Let's try it again!")
        }

        console.log('gemini_answer: ', { ...gemini_answer, name: topic })
        setAiTopic(gemini_answer)
    }

    const handleSaveTopic = async (e) => {
        e.preventDefault()

        if (!session) {
            alert("Login to save the topic !")
            return
        }

        setSubmitting2(true)
        try {
            const response = await fetch("/api/topic/ai", {
                method: "POST",
                body: JSON.stringify({ ...aiTopic, name: topic, userId: session?.user.id }),
            });

            const text = await response.text();
            alert(text)

        } catch (error) {
            console.log(error);
            alert(error.message);
        } finally {
            setSubmitting2(false);
        }
    }

    return (
        <div className="main">
            <h1 className="w-full text-center font-bold text-xl">Find key for topic by AI</h1>

            <form className="max-w-full pt-10" onSubmit={handleSubmit}>
                <label className="form-control w-full max-w-md mx-auto mb-2">
                    <div className="label">
                        <span className="label-text font-bold">Topic</span>
                    </div>
                    <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="Tán gẫu về ẩm thực Việt Nam" className="input input-bordered w-full max-w-md" required />
                </label>

                <label className="form-control w-full max-w-md mx-auto mb-2">
                    <div className="label">
                        <span className="label-text font-bold">Level</span>
                    </div>
                    <select value={level} onChange={e => setLevel(e.target.value)} className="select select-bordered">
                        <option>Ielts 9.0</option>
                        <option>Ielts 7.0</option>
                        <option>Ielts 5.0</option>
                        <option>Ielts 3.0</option>
                    </select>
                </label>

                <label className="form-control w-full max-w-md mx-auto mb-2">
                    <div className="label">
                        <span className="label-text font-bold">Minimum number of answers</span>
                    </div>
                    <select value={answerNumb} onChange={e => setAnswerNumb(e.target.value)} className="select select-bordered">
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                </label>

                <div className="w-full max-w-md mx-auto mt-6">
                    <button type="submit" disabled={submitting} className="btn btn-neutral tooltip" data-tip="If you don't satisfy the result, you should submit another one for better">
                        {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>

            {/* Chunking Cluster */}
            {aiTopic &&
                <div>
                    {aiTopic.chunks?.map((chunk, index) => (
                        <div key={index} className="bg-blue-950/10 my-4 p-5 rounded-md border border-white">
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
                            {aiTopic.extensions?.map((e, i) => (
                                <li className="mb-2" key={i}>{e.content + ' : ' + e.description}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            }

            {/* Save */}
            {aiTopic && <div className="w-full text-right mt-2">
                <button onClick={handleSaveTopic} className="btn btn-neutral">
                    {submitting2 ? 'Saving topic...' : 'Save topic'}
                </button>
            </div>}
        </div>
    )
}
