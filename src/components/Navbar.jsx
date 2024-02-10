const Navbar = () => {

	return(
		<>
			<div className="navbar flex bg-navy text-white justify-between px-4 py-2">
				{/* Left hand side of the navbar */}
				<div className="left-hand-navbar">
					<p>Starvox</p>
				</div>

				{/* Search Bar */}
				<div className="search-bar">
					<input placeholder="search" className="input-search px-2 py-1 text-center rounded-md" />
				</div>


				{/* Right hand side of the navbar*/}
				<div className="right-hand-navbar">
					<button className="Login px-4 py-1 rounded-md border-2 border-white-500">Login</button>
					<button className="Sign Up ml-4 bg-yellow px-4 py-1 text-black rounded-md">Sign Up</button>
				</div>
			</div>
		</>
	)
}

export default Navbar;
