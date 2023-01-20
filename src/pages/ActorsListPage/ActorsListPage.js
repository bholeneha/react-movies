import "./ActorsListPage.css"
import ActorCard from "../../components/ActorCard/ActorCard"

export default function ActorsListPage({ movies }) {
    const actorsSet = new Set()
    movies.forEach(movie => movie.cast.forEach(actor => actorsSet.add(actor)))

    //create an array from set 
    const actorsList = Array.from(actorsSet)

    //Map over the array 
    const actorsListEls = actorsList.map((actor, index) => {
        return <ActorCard actor={actor} key={index} />
    })

    return (
        <ul>
            {actorsListEls}
        </ul>
    )
}