import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"
import MoviesListPage from "../MoviesListPage/MoviesListPage"
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage"
import ActorsListPage from "../ActorsListPage/ActorsListPage"
import LoginPage from "../LoginPage/LoginPage"
import "./App.css"
import { movies } from "../../data"

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <main>
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/*" element={<MoviesListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
            <Route path="/actors" element={<ActorsListPage movies={movies} />} />
            {/* <Route path="/actors/:actorName" element={<MovieDetailPage movies={movies} />} /> */}
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </main>
  )
}