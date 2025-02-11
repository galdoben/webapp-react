import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import ReviewCard from "../components/ReviewCard";
import FormReview from "../components/FormReview";

const ReviewsMovie = () => {

    const { id } = useParams();
    const { movie, fetchMovie } = useGlobalContext()

    const renderReviews = () => {
        if (movie && Array.isArray(movie.reviews) && movie.reviews.length > 0) {
            return movie.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
            ));
        }
    }

    useEffect(() => {
        fetchMovie(id);
    }, [id, fetchMovie])

    if (!movie) {
        return <div>Loading...</div>
    }


    return (
        <div>
            {/* Reviews del film con id={id} */}

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
            <section>
                {renderReviews()}
            </section>

            <section>
                <FormReview movie_id={movie?.id} />
            </section>
        </div>
    )
}
export default ReviewsMovie