import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import { useState } from "react"

const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)


    const handleLogin = (e) => {
        e.preventDefault()
        const data = {email, password, rememberMe}
        console.log(data)
    }


    {/* Style Form Field */}
    const formFieldClass = "border rounded px-2 py-0.5 w-full"

    return (
        <div>
            <form className="bg-gray-50 max-w-xl py-10 px-20 rounded shadow-lg">
                {/* Form Title */}
                <div className="mb-2">
                    <h1 className="text-xl text-navy font-bold">Login</h1>
                </div>
                {/* Refer to Signup Page */}
                {/* Form Fields */}
                <div>
                    <div className="mb-2">
                        <input
                            type="text"
                            placeholder="email"
                            name="email"
                            id="email"
                            className={`${formFieldClass}`}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            id="password"
                            className={`${formFieldClass}`}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* Remember me*/}
                    <div className="mb-2 flex">
                        <input
                            type="checkbox"
                            placeholder="remember me"
                            name="rememberMe"
                            id="rememberMe"
                           className={`mr-2`}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span>Remember me</span>
                    </div>
                </div>
                {/* Login Button */}
                <div className="mb-5">
                    <Button
                        text="Login"
                        style="yellow"
                        onClick={handleLogin}
                    />
                </div>
                <div>
                    <p>Forgot password? <Link to="#" className="text-navy">Click here</Link></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
