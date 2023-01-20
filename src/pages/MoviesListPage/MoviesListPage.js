import "./MoviesListPage.css"
import MovieCard from "../../components/MovieCard/MovieCard"

export default function MoviesListPage({ movies }) {
    const movieCards = movies.map((movie, idx) => (
        <MovieCard
            movie={movie}
            key={idx}
        />
    ))

    return (
        <ul>
            {movieCards}
        </ul>
    )
}