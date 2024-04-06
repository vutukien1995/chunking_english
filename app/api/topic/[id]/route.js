
import Topic from "@models/topic"
import { connectToDB } from "@utils/database"


export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const topics = await Topic.findById(params.id).populate('creator')
        if (!topics) return new Response("Topic not found", { status: 404 })

        return new Response(JSON.stringify(topics), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Internal Server Error", { status: 500 })
    }
}