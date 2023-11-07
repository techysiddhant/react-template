import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="w-full h-10 flex flex-col items-center justify-center bg-indigo-400">
			<nav className="flex items-center justify-center space-x-20">
				<h1>Navbar</h1>
				<div className="flex items-center gap-10">
					<Link to="/">Home</Link>
					<Link to="/aboutus">About Us</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
