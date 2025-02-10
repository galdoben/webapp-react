import { useGlobalContext } from '../context/GlobalContext' //hook
import { useEffect } from 'react'
import CardMovie from '../components/CardMovie'
import FormReview from '../components/FormReview'

const HomePage = () => {
    const { fetchMovies, movies } = useGlobalContext()
    useEffect(fetchMovies, [])

    const pageMovies = () => {
        return movies.map(movie => {
            return (
                <div className='col' key={movie.id}>
                    <CardMovie movie={movie} />
                </div>
            )

        })
    }


    return (
        <>
            <div className='row row-cols-3 my-5'>
                {pageMovies()}
            </div>

        </>


    )
}

export default HomePage