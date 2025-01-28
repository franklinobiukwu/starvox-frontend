const Button = (props) => {

    {/* Button Styles */}
    const navy = ""
    const yellow = "font-bold text-navy py-0.5 bg-yellow rounded w-full"

    return (
        <button
            type={props.type}
            className={props.style === 'yellow'? yellow : navy}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

export default Button
