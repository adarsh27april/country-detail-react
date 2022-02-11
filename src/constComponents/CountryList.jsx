import React, { useState, useCallback, useEffect } from 'react';

import { Spinner } from 'reactstrap';

import { useGlobalcontex } from '../ContextAPI';

const CountryList = () => {
	const { setCountryDetail } = useGlobalcontex();

	var url = `https://restcountries.com/v3.1/all`;

	const [IsLoading, setIsLoading] = useState(false);
	const [IsServerErr, setIsServerErr] = useState(false);
	const [FetchedApiData, setFetchedApiData] = useState([]);
	const [IsShowCountryList, setIsShowCountryList] = useState(false);

	console.log('CountryList');

	const getCountryData = async (url) => {
		setIsLoading(true);
		// const getCountryData = useCallback(async (url) => {
		await fetch(url)
			.then((response) => {
				console.log('fetching all countries');
				setIsLoading(false);
				return response.json();
			})
			.then((data) => {
				setFetchedApiData(data);
				setIsLoading(false);
			})
			.catch((error) => {
				setIsLoading(false)
				setIsServerErr(true)
				console.log('Error during fetch: ' + error.message);
				throw new Error(error.message);
			}
			);
		// }, [url])
	}

	useEffect(() => {
		if (IsShowCountryList) {
			// window.onload = () => {
			getCountryData(url);
			console.log('here');
			// }
		}
		// });
	}, [IsShowCountryList])

	const ShowBtn = () => {
		setIsShowCountryList(!IsShowCountryList);
	}

	if (!IsShowCountryList) {
		return <div className=' d-flex align-items-center justify-content-center'>
			<button className="btn btn-primary" onClick={() => ShowBtn()}>
				Show/Hide Country List
			</button>
			<br />
		</div>
	}
	else if (IsLoading) {
		return (<>
			<div className='d-flex align-items-center justify-content-center'>
				Loading List of all countries...
			</div>
			<div className='mt-3 d-flex align-items-center justify-content-center'>
				<Spinner color="primary" type="grow" />
				&nbsp;
				<Spinner color="success" type="grow" />
				&nbsp;
				<Spinner color="danger" type="grow" />
				&nbsp;
				<Spinner color="warning" type="grow" />
			</div>
		</>)
	}
	else if (IsServerErr) {
		return (<>
			<div className='d-flex align-items-center justify-content-center'>
				⚠️ Some error occurred. while loading List of countries😕<br /><br />
				Possibly network error😤,<br />
				Check your network and try refreshing the page
			</div>
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
			<div className=' d-flex align-items-center justify-content-center'>
				<button onClick={() => ShowBtn()} className="btn btn-primary">
					Show/Hide Country List
				</button>
			</div>
			<div className="mt-5 overflow-auto" style={{ "maxWidth": "90%", "maxHeight": "300px" }}>
				<ul className="list-group">
					{
						FetchedApiData.map((country, index) => {
							return (
								<li key={`CountryList-${index}`}
									className='list-group-item d-flex justify-content-between align-items-start'
								>
									{country.flag}&nbsp; &nbsp; &nbsp; {country.name.official}

									<button className='btn btn-secondary'
										onClick={() => setCountryDetail(country)}
									>
										<i className="bi bi-search" />
									</button>
								</li>
							)
						})
					}
				</ul>
			</div>
		</>)
	}

	return <></>;
};

export default CountryList;
