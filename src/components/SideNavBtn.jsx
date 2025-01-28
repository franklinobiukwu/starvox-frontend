import { Link } from "react-router-dom"

const SideNavBtn = (props) => {
    return (
        <div>
            <Link
                className=""
                to={props.to}
            >
                {props.text}
            </Link>
        </div>
    )
}

export default SideNavBtn
