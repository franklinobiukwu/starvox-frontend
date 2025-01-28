import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar.jsx";
import SideNav from "../components/SideNav.jsx";

const DashboardLayout = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>

            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <SideNav/>
                </div>
                <div className="col-span-9">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
