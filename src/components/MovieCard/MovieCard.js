import "./MovieCard.css";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <Link className="movie-card" to={`/movies/${movie.title}`}>
            <div className="movie-background" style={{ "background": `url(${movie.posterPath})` }}>
                <div className="movie-info">
                    <h1>{movie.title}</h1>
                    <p>Released: {movie.releaseDate}</p>
                </div>
            </div>
        </Link>
    )
}