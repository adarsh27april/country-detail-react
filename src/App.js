// import logo from './logo.svg';
// import './App.css';
import React, { useState, useContext } from 'react';

import Nav from './constComponents/Nav';
import Searchbox from './constComponents/Searchbox';
function App() {

	// const [OfficialName, setOfficialName] = useState('');
	// const OfficialNameContext = useContext('');

	return (
		<>
			{/* <OfficialNameContext.Provider value={{ OfficialName, setOfficialName }}> */}
			<Nav />
			<Searchbox />
			{/* </OfficialNameContext.Provider> */}
		</>
	);
}

export default App;
