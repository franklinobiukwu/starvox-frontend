import DashboardUserCard from "./DashboardUserCard"
import SideNavBtn from "./SideNavBtn"

const SideNav = () => {
    return (
        <div>
            <div>
                <DashboardUserCard/>
            </div>
            {/* Navigations */}
            <div>
                <div>
                    <SideNavBtn
                        text="Home"
                    />
                </div>
            </div>
        </div>
    )
}

export default SideNav
