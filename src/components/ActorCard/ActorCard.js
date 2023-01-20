import "./ActorCard.css";
import { Link } from "react-router-dom";

export default function ActorCard({ actor }) {
    let randomNum = Math.floor(Math.random() * 100)
    console.log(randomNum)

    return (
        <li className="actors-list" style={{ "background": `url(https://picsum.photos/id/${randomNum}/200/300/?blur)` }}>
            <Link to={`/actors/${actor}`}>{actor}</Link>
        </li>
    )
}