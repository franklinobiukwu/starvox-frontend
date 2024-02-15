import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const IndexLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default IndexLayout
