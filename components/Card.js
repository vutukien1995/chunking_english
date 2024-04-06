export default ({ title, link }) => {

    return (
        <div className="card w-60 bg-neutral text-primary-content">
            <a href={link} target="_blank" rel="noreferrer">
                <div className="card-body">
                    <p className="text-white">{title}</p>
                </div>
            </a>
        </div >
    )
    
}