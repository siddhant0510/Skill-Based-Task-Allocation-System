import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function LoginComp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const reqoptions = {
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({ username, password }),
            method: "POST",

        }
        fetch("http://localhost:9000/login", reqoptions)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else if (res.status === 404) {
                    setLoggedIn("wrong credentials");
                    return {};
                }
            })
            .then(data => {
                console.log(data);
                //redux satate modify
                dispatch(loginSuccess({ user: data.user, token: data.token }));

                //routing to dashboard
                if (data.user.role === 1) { //admin
                    navigate("/admin");
                } else if (data.user.role === 2) { //user
                    navigate("/user");
                } else {
                    navigate("/home");
                }

            });

    };
    return (
        <div>
            <h2>Login form</h2>
            <form >
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        name="username"
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        name="password"
                        type="text"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
            </form>
            <p>username: {username} <br />
                password: {password}</p>
            <p>{loggedIn}</p>

            
        </div>
    )
}