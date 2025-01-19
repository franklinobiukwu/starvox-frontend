import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

{/* Imported magnifying glass from font awesome*/}
const element = <FontAwesomeIcon icon={faSearch} size='lg' color='black'/>

{/* Method to reload the current page in the navbar for logo */}
const reloadCurrentPage = () => {
	window.location.reload();
};


const Navbar = () => {

	return(
		<>
			<nav className="navbar flex bg-navy text-white justify-between px-4 py-6">
				{/* Left hand side of the navbar */}
				<div className="left-hand-navbar">
					<a href="#" onClick={reloadCurrentPage}>StarVox</a>
				</div>

				{/* Search Bar */}
				<form className="search-bar" action="#" method="GET">
					<div className="input-search-group relative">
						{/* Place the magnifying glass icon inside the input group */}
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
							{/*Need to implement JS code for the search icon*/}
						{element}
						</div>
						<input
						className="input-search px-1 py-1  pl-20 pr-20 text-center rounded-md "
						type="text"
						placeholder="search"
						style={{color: 'black'}}
						/>
					</div>
				</form>

				{/* Right hand side of the navbar*/}
				<div className="right-hand-navbar">
					<button className="Login pl-7  pr-7 rounded-md border-2 border-white-500">Login</button>
					<button className="Sign Up bg-yellow pl-5 pr-5 ml-9 mr-6 text-black rounded-md">Sign Up</button>
				</div>
			</nav>
		</>
	)
}

export default Navbar;
