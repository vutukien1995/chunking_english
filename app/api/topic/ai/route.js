import Topic from "@models/topic";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { name, chunks, extensions, userId } = await request.json();

    try {
        await connectToDB();

        const newChunks = chunks?.map(chunk => ({
            key: chunk.question,
            answers: chunk.answers
        }))

        const newExtensions = extensions?.map(extension => extension.content + ' : ' + extension.description)

        const newTopic = new Topic({
            creator: userId,
            name: name,
            chunks: newChunks,
            extensions: newExtensions
        })

        await newTopic.save();

        return Response.json("Save topic success", { status: 201 })
    } catch (error) {
        console.error(error.message)
        return new Response("Failed to create a new topic", { status: 500 });
    }
}