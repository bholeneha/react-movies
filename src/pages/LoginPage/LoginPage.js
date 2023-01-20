import { useState } from "react"
import "./LoginPage.css"

export default function LoginPage(props) {
    const [input, setInput] = useState("")

    function handleChange(evt) {
        setInput(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        // console.log(user)
        props.setUser(input)
    }

    return (
        <div>
            <h3>Enter User Name:</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" onChange={handleChange} />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}