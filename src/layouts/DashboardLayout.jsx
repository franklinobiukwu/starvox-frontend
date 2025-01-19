import { Outlet } from "react-router-dom"
import GeneralNavbar from "../components/GeneralNavbar.jsx";

const DashboardLayout = () => {
    return (
        <div>
            <GeneralNavbar/>
            <div>
                <div>
                    <div>SIDE NAV</div>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
