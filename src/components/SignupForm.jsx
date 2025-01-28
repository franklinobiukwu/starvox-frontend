import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../components/Button"

const SignupForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isStar, setIsStar] = useState(false)

    {/* Handle Submit */}
    const handleSignup = (e) => {
        e.preventDefault()
        const formData = {firstName, lastName, email, password, confirmPassword, isStar}
        console.log(formData)
    }

    {/* Style Form Field */}
    const formFieldClass = "border rounded px-2 py-0.5 w-full"

    return (
        <div className="flex justify-center items-center">
            <form className="bg-gray-50 max-w-xl py-10 px-20 rounded shadow-lg">
                {/* Form Title */}
                <div className="mb-2">
                    <h1 className="text-xl text-navy font-bold">Sign up</h1>
                </div>
                {/* Refer to login page */}
                <p className="mb-2">Already have an account? <Link to="/login" className="text-navy font-semibold">Login</Link></p>
                {/* Form Filds */}
                <div>
                    <div className="mb-2">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            id="firstName"
                            className={`${formFieldClass}`}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            id="lastName"
                            className={`${formFieldClass}`}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            id="email"
                            className={`${formFieldClass}`}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            id="password"
                            className={`${formFieldClass}`}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            id="confirmPassword"
                            className={`${formFieldClass}`}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-2 flex">
                        <input
                            type="checkbox"
                            name="isStar"
                            id="isStar"
                            className={`mr-2`}
                            onChange={(e) => setIsStar(e.target.checked)}
                        />
                        <span>Are you a Star?</span>
                    </div>
                </div>
                {/* Join Button */}
                <div className="mb-2">
                    <Button
                        text="Join"
                        style="yellow"
                        onClick={handleSignup}
                    />
                </div>
                {/* Terms */}
                {/* Refer to Home*/}
                <div>
                    <p className="text-sm text-center">
                        By joining, you agree to the <Link to="#" className="text-navy">Terms and Privacy Policy</Link>.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignupForm
