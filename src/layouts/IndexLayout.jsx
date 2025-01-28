import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const IndexLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Nav Bar */}
            <div className="flex-none z-10">
                <Navbar/>
            </div>
            {/* Section */}
            <div className="flex-grow">
                <Outlet/>
            </div>
        </div>
    )
}

export default IndexLayout
