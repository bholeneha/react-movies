import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ user }) {
    console.log(user)
    return (
        <div className="Nav-Bar">
            <h1>Welcome, {user}!</h1>
            <nav className="Nav-Links" >
                <Link className="Nav-Link" to="/">Movies</Link>
                <Link className="Nav-Link" to="/actors">Actors</Link>
            </nav>
        </div>
    );
}
