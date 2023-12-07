const Cards = (props) => {
    return (
        <div className="card">
            <img className="img" src={props.img} alt="" />
            <div className="card-body">
                <div className="card-title">
                    <h1 className="title">{props.title}</h1>
                </div>
                <div className="card-text">
                    <p className="text">{props.text}</p>
                </div>
                <div className="card-button">
                    <button className="button">Go somewhere</button>
                </div>
            </div>
        </div>
    )
}

export default Cards