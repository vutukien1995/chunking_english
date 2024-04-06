"use client"

import { useSession } from "next-auth/react"
import { useState } from "react"

export default () => {

    const { data: session } = useSession()

    const [topic, setTopic] = useState({
        name: '',
        chunks: [{
            key: '',
            answers: []
        }],
        extensions: []
    })
    const [editContainer, setEditContainer] = useState({
        content: '',
        index: '',
        index2: '',
        type: '',
        title: '',
        delete: false,
    })
    const [edited, setEdited] = useState(false)
    const [creating, setCreating] = useState(false)

    const handleEdit = (type, index, index2) => {
        document.getElementById('my_modal_1').showModal()

        if (type == 'chunks_key') {
            setEditContainer({
                content: topic.chunks[index].key,
                type: 'chunks_key',
                index: index,
                title: 'Chunks > Key'
            })
        }

        if (type == 'chunks_answers') {
            setEditContainer({
                content: topic.chunks[index].answers[index2],
                type: 'chunks_answers',
                index: index,
                index2: index2,
                title: 'Chunks > Answers',
                delete: true
            })
        }

        if (type == 'extensions') {
            setEditContainer({
                content: topic.extensions[index],
                type: 'extensions',
                index: index,
                title: 'Extensions',
                delete: true
            })
        }

        if (type == 'name') {
            setEditContainer({
                content: topic.name,
                type: 'name',
                title: 'Name'
            })
        }
    }

    const addChunksAnswer = (index) => {
        document.getElementById('my_modal_1').showModal()

        setEditContainer({
            content: '',
            type: 'add_chunks_answers',
            index: index,
            title: 'Add answer'
        })
    }

    const addExtension = () => {
        document.getElementById('my_modal_1').showModal()

        setEditContainer({
            content: '',
            type: 'add_extensions',
            title: 'Add extension'
        })
    }

    const addChunks = () => {
        document.getElementById('my_modal_1').showModal()

        setEditContainer({
            content: '',
            type: 'add_chunks',
            title: 'Add Chunking Cluster: Key'
        })
    }

    const handleCloseModalCreate = () => {
        if (editContainer.type == 'chunks_key') {
            let temp = { ...topic }
            temp.chunks[editContainer.index].key = editContainer.content
            setTopic(temp)
        }

        if (editContainer.type == 'chunks_answers') {
            let temp = { ...topic }
            temp.chunks[editContainer.index].answers[editContainer.index2] = editContainer.content
            setTopic(temp)
        }

        if (editContainer.type == 'extensions') {
            let temp = { ...topic }
            temp.extensions[editContainer.index] = editContainer.content
            setTopic(temp)
        }

        if (editContainer.type == 'name') {
            let temp = { ...topic }
            temp.name = editContainer.content
            setTopic(temp)
        }

        if (editContainer.type == 'add_chunks_answers') {
            if (!editContainer.content)
                return

            let temp = { ...topic }
            temp.chunks[editContainer.index].answers.push(editContainer.content)
            setTopic(temp)
        }

        if (editContainer.type == 'add_extensions') {
            if (!editContainer.content)
                return

            let temp = { ...topic }
            temp.extensions.push(editContainer.content)
            setTopic(temp)
        }

        if (editContainer.type == 'add_chunks') {
            if (!editContainer.content)
                return

            let temp = { ...topic }
            temp.chunks.push({
                key: editContainer.content,
                answers: []
            })
            setTopic(temp)
        }

        document.getElementById('my_modal_1').close()
        setEdited(true)
    }

    const handleCloseModalDelete = () => {
        if (!confirm('Are you sure for delete this?'))
            return

        if (editContainer.type == 'chunks_answers') {
            let temp = { ...topic }
            temp.chunks[editContainer.index].answers.splice(editContainer.index2, 1)
            setTopic(temp)
        }

        if (editContainer.type == 'extensions') {
            let temp = { ...topic }
            temp.extensions.splice(editContainer.index, 1)
            setTopic(temp)
        }

        document.getElementById('my_modal_1').close()
        setEdited(true)
    }

    const handleUpdateTopic = async () => {
        setCreating(true)
        try {
            const response = await fetch('/api/topic', {
                method: "POST",
                body: JSON.stringify({...topic, userId: session?.user.id})
            })
            const data = await response.text()

            if (!response.ok) {
                alert(response.status + ' - ' + data)
                return
            }

            alert(data)
        } catch (error) {
            console.log(error)
            alert('Ops! Something wrong with server! Pls try later!')
            return
        } finally {
            setCreating(false)
            setEdited(false)
        }
    }

    return (
        <div className="main">
            <div className="w-full text-center">
                <div className="group p-1 mb-2 rounded-md border border-stone-400 cursor-pointer flex justify-between" onClick={() => handleEdit("name")}>
                    <h1 className="text-3xl font-bold">{topic?.name}</h1>
                    <img className="h-7 w-7 opacity-50 group-hover:opacity-100" src="/icons/edit.svg" alt="" />
                </div>
            </div>
            {topic &&
                <div>
                    {topic.chunks?.map((chunk, index) => (
                        <div className="bg-blue-950/10 my-4 p-5 rounded-md shadow-lg">
                            <h3 className="mb-5 font-bold underline">Chunking Cluster:</h3>
                            <div className="group p-1 mb-2 rounded-md border border-stone-300 cursor-pointer flex justify-between" onClick={() => handleEdit("chunks_key", index)}>
                                <p className="font-bold text-lg">Key:  {chunk.key}</p>
                                <img className="h-7 w-7 opacity-50 group-hover:opacity-100" src="/icons/edit.svg" alt="" />
                            </div>
                            <ul className="list-disc ml-8">
                                {chunk.answers.map((a, i) => (
                                    <li className="mb-2" key={i}>
                                        <div className="group p-1 mb-2 rounded-md border border-stone-300 cursor-pointer flex justify-between" onClick={() => handleEdit("chunks_answers", index, i)}>
                                            {a}
                                            <img className="h-7 w-7 opacity-50 group-hover:opacity-100" src="/icons/edit.svg" alt="" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="w-full text-right">
                                <button className="btn btn-primary" onClick={() => addChunksAnswer(index)}>Add answer</button>
                            </div>
                        </div>
                    ))}
                    <div className="w-full text-right">
                        <button className="btn btn-primary" onClick={() => addChunks()}>Add chunking cluster</button>
                    </div>

                    <div className="bg-green-950/20 my-4 p-5 rounded-md shadow-lg">
                        <h3 className="mb-5 font-bold underline">Extensions:</h3>
                        <ul className="list-disc ml-8">
                            {topic.extensions?.map((e, i) => (
                                <li className="mb-2" key={i}>
                                    <div className="group p-1 mb-2 rounded-md border border-stone-400 cursor-pointer flex justify-between" onClick={() => handleEdit('extensions', i)}>
                                        {e}
                                        <img className="h-7 w-7 opacity-50 group-hover:opacity-100" src="/icons/edit.svg" alt="" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="w-full text-right">
                            <button className="btn btn-primary" onClick={() => addExtension()}>Add extension</button>
                        </div>
                    </div>
                </div>
            }

            {/* Update */}
            {edited && <div className="w-full text-right mt-2">
                <button onClick={handleUpdateTopic} className="btn btn-neutral">
                    {creating ? 'Creating topic...' : 'Create topic'}
                </button>
            </div>}

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">{editContainer.title}</h3>
                    <input type="text" value={editContainer.content} onChange={(e) => setEditContainer({ ...editContainer, content: e.target.value })} placeholder="Type here" className="input input-bordered w-full" />
                    <div className="modal-action">
                        {editContainer.delete &&
                            <button className="btn mr-5" onClick={handleCloseModalDelete}>Delete</button>}
                        <button className="btn" onClick={handleCloseModalCreate}>Create</button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}