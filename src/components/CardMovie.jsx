import { Link } from "react-router-dom";

const CardMovie = ({ movie }) => {
    const { id, title, director, genre, release_year, image, average_vote } = movie;
    return (

        <div className="card">
            <img src={image} className="card-img-top movie-image" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <address><i> By {director}</i></address>
                <li className="list-group-item">{genre},{release_year}</li>
            </ul>
            <div>Average vote: {movie.average_vote}</div>

            <div className="card-body">
                <Link to={`movies/${id}`} className="btn btn-dark">Review</Link>
            </div>
        </div>

    )
}

export default CardMovie