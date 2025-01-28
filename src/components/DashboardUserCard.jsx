import Avatar from "../assets/avatar.png"

const DashboardUserCard = (props) => {
    return (
        <div>
            <div className="flex items-center p-5 mb-5 border border-b-gray88">
                {/* Image */}
                <div className="rounded-full w-16 h-16 overflow-hidden mr-5">
                    <img src={Avatar} alt="profile-photo"/>
                </div>
                {/* Name */}
                <div>
                    <h3 className="font-bold text-navy text-md">John Doe{props.name}</h3>
                    <div className="text-sm text-gray-500">Verified{props.verified}</div>
                </div>
            </div>
        </div>
    )
}
export default DashboardUserCard
