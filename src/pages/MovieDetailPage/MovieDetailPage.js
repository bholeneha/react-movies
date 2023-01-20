import "./MovieDetailPage.css"
import { useParams } from "react-router"

export default function MovieDetailPage({ movies }) {
    let { movieName } = useParams()
    let movie = movies.find(movie => movie.title === movieName)
    return (
        <div>
            <h1>Movie Details</h1>
            <div>
                <div>
                    <img src={movie.posterPath}></img>
                </div>
                <div>
                    <h2>{movie.title}</h2>
                    <h3 style={{ "display": "inline" }}>Released: </h3>
                    <p style={{ "display": "inline" }}>{movie.releaseDate}</p>
                    <h3>CAST:</h3>
                    <p>{movie.cast.join(", ")}</p>
                </div>
            </div>
        </div>
    )
}