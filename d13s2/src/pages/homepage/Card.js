
const Card = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.price}</p>
        </div>
    )
}

export default Card;