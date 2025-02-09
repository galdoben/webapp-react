import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

const ReviewsMovie = () => {

    const { id } = useParams();
    const { movie, fetchMovie } = useGlobalContext()

    useEffect(() => {
        fetchMovie(id);
    }, [id, fetchMovie])

    return (
        <div>
            Reviews del film con id={id}
            <div className="card">
                <img src={movie.image} className="card-img-top movie-image" alt={movie.title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                </div>

                <ul className="list-group list-group-flush">
                    <address><i> By {movie.director}</i></address>
                    <li className="list-group-item">{movie.genre},{movie.release_year}</li>
                </ul>
            </div>
        </div>
    )
}
export default ReviewsMovie