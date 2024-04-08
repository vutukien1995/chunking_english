export default ({ extensions }) => {
    return (
        <div className="bg-green-950/20 my-4 p-5 rounded-md border border-white">
            <h3 className="mb-5 font-bold underline">Extensions:</h3>
            <ul className="list-disc ml-8">
                {extensions?.map((e, i) => (
                    <li className="mb-2" key={i}>{e}</li>
                ))}
            </ul>
        </div>
    )
}