import React from 'react';

const Nav = () => {
	return (<>
		<header className="site-header sticky-top">
			<nav className="mx-1 my-1 rounded navbar navbar navbar-expand-lg navbar-dark "
				style={{ backgroundColor: "rgb(16, 17, 58)" }}
			>
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="me-auto navbar-nav mb-2 mb-lg-0">
							<li className="nav-item">
								<a target="blank" className="nav-link active" href="https://github.com/adarsh27april/country-detail-react">
									GitHub
								</a>
							</li>
							<li className="nav-item">
								<a href="/" className="nav-link active">Home</a>
							</li>
						</ul>

					</div>

					<a href="/" className="navbar-brand">
						Country Detail
						<span className="container navbar-brand"></span>
					</a>
				</div>

			</nav>
		</header>
	</>);
};

export default Nav;
