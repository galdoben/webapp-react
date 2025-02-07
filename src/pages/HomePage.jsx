import { useGlobalContext } from '../context/GlobalContext' //hook
import { useEffect } from 'react'


const HomePage = () => {
    const { fetchMovies } = useGlobalContext()
    useEffect(fetchMovies, [])


    return (
        <div>
            Home
        </div>
    )
}

export default HomePage