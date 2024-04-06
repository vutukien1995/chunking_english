import Topic from "@models/topic";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { name, chunks, extensions, userId } = await request.json();

    if (!userId)
        return new Response("Pls login first", { status: 400 })

    if (!name)
        return new Response("Name is missing", { status: 400 })

    try {
        await connectToDB();

        const newTopic = new Topic({
            creator: userId,
            name: name,
            chunks: chunks,
            extensions: extensions
        })

        await newTopic.save();

        return new Response("Create new topic success", { status: 201 })
    } catch (error) {
        console.error(error.message)
        return new Response("Failed to create a new topic", { status: 500 })
    }
}

export const PUT = async (request) => {
    const { name, chunks, extensions, _id } = await request.json();

    try {
        await connectToDB

        await Topic.findOneAndUpdate({ _id : _id}, {
            name : name,
            chunks : chunks,
            extensions : extensions
        })

        return new Response("Update success", { status: 200 });
    } catch (error) {
        console.error(error.message)
        return new Response("Failed to create a new topic", { status: 500 });
    }
}