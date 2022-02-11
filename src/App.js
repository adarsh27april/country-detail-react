// import logo from './logo.svg';
// import './App.css';
import React from 'react';

import Nav from './constComponents/Nav';
import Searchbox from './constComponents/Searchbox';
import CountryList from './constComponents/CountryList';
import Flag from './dynamicComponents/Flag';
import CountryDetailTable from './dynamicComponents/CountryDetailTable';
import BingMap from './dynamicComponents/BingMap';
import Wttr from './dynamicComponents/Wttr';
function App() {

	return (
		<>
			<Nav />
			<main className='container'>
				<div className="row mb-2">
					<div className="col-md-6 my-4">
						<Searchbox />
					</div>
					<div className="col-md-6 my-4">
						<CountryList />
					</div>
				</div>
			</main>

			<main className="container">
				<div className="row mb-2">
					<div className="col-md-6 my-4">
						<Flag />
					</div>
					<div className="col-md-6 my-4">
						<CountryDetailTable />
					</div>
				</div>

				<div className="row mb-2">
					<div className="col-md-6 my-4">
						<BingMap />
					</div>
					<div className="col-md-6 my-4">
						<Wttr />
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
