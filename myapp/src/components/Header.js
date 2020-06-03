import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<nav className="navbar">
				<div className="container">
					<h1 className="text-dark">RailFeed</h1>

					<div className="row">
						<Link className="nav-link ml-3" to="/">
							Home
						</Link>
						<Link className="nav-link ml-3" to="/review">
							Testing
						</Link>
					</div>
				</div>
				{/* <div className="underline"></div>       */}
			</nav>
		</div>
	);
};

export default Header;
