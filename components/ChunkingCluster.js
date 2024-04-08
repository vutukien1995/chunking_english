export default ({ chunk }) => {
    return (
        <div className="bg-blue-950/10 my-4 p-5 rounded-md border border-white">
            <h3 className="mb-5 font-bold underline">Chunking Cluster:</h3>
            <p className="mb-2 font-bold text-lg">Key:  {chunk.key}</p>
            <ul className="list-disc ml-8">
                {chunk.answers.map((a, i) => (
                    <li className="mb-2" key={i}>{a}</li>
                ))}
            </ul>
        </div>
    )
}