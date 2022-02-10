import React, { useState, useCallback, useEffect } from 'react';

import { useGlobalcontex } from '../ContextAPI';
const CountryList = () => {
	const { } = useGlobalcontex();

	var url = `https://restcountries.com/v3.1/all`;
	// document.addEventListener('DOMContentLoaded', () => {
	// })

	const [IsLoading, setIsLoading] = useState(true);
	const [IsServerErr, setIsServerErr] = useState(false);
	const [FetchedApiData, setFetchedApiData] = useState([]);

	const getCountryData = useCallback(async (url) => {
		await fetch(url)
			.then((response) => {
				console.log('fetching');
				if (response.status >= 200 && response.status <= 299) {
					setIsLoading(false);
					return response.json();
				}
				else {
					setIsLoading(false);
					setIsServerErr(true);
					throw new Error(response.statusText);
				}
			})
			.then((data) => {
				setFetchedApiData(data);
				setIsLoading(false);
			})
			.catch((error) => {
				throw new Error(error.message);
				// console.log('Error during fetch: ' + error.message);
			}
			);
	}, [url])

	useEffect(() => {
		getCountryData(url);
	}, [url, getCountryData])

	if (IsLoading) {
		return (<>
			Loading List of countries
		</>)
	}
	else if (IsServerErr) {
		return (<>
			Some error occurred , possibly netword error, try refreshing the page, or check your network
		</>)
	}
	else if (FetchedApiData.length != 0) {

		function compare(a, b) {
			if (a.name.official > b.name.official)
				return 1;
			if (a.name.official < b.name.official)
				return -1;
			return 0;
		}
		FetchedApiData.sort(compare);

		return (<>
			{/* <div className="d-md-flex"> */}
			<div id="countryList" className="overflow-auto" style={{ "maxWidth": "90%", "height": "300px" }}>
				<ul className="list-group">
					{
						FetchedApiData.map((country, index) => {
							return (
								<li key={`CountryList-${index}`}
									className='list-group-item d-flex justify-content-between align-items-start'
								>
									{country.flag}&nbsp; &nbsp; &nbsp; {country.name.official}
									<span><i className="bi bi-search" />
									</span>
								</li>
							)
						})
					}
				</ul>
			</div>
			{/* </div> */}
		</>)
	}

	return <></>;
};

export default CountryList;
