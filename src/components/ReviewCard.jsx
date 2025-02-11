

const ReviewCard = ({ review }) => {
    const { text, vote, name } = review;
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text"> {text} </p>
                <p>{vote}</p>
                <address>by {name}</address>
            </div>
        </div>
    )
}

export default ReviewCard 