import { useState } from "react";
export default function LoginComp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const reqoptions = {
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({ password }),
            method: "POST",

        }
        fetch("http://localhost:9000/login", reqoptions)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else if (res.status === 404) {
                    return {};
                }
            })
            .then(data => {
                console.log(data);
                //redux satate modify
                //routing to dashboard
                
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
        </div>
    )
}