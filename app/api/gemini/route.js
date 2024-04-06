const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

export const POST = async (request) => {

    let { topic, level, answerNumb } = await request.json();

    if (!topic || !level || !answerNumb)
        return new Response('Topic, level and answerNumb is required', { status: 400 })

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    let prompt = " Trong lớp học tiếng anh ở trình độ " + level + " với chủ đề '" + topic + "'. question là câu hỏi bằng tiếng anh liên quan đến chủ đề. answers là các câu trả lời bằng tiếng anh cho question. extentions là vocabulary và phrasal verbs bằng tiếng anh hữu dụng trong answers. Ít nhất " + answerNumb + " question. Hãy đưa ra câu trả lời chỉ bằng JSON giống với mẫu sau " + JSON.stringify(template)
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    let res = {
        message: 'success',
        prompt: prompt,
        answer: text
    }

    return Response.json(res, { status: 200 })

}

let template =
{
    "chunks": [
        {
            "question": "",
            "answers": [""]
        }
    ],
    "extensions": [
        {
            "content": "",
            "description": ""
        }
    ]
}