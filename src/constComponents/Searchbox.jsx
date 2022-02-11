import SearchResult from '../dynamicComponents/SearchResult';

// import React, { useState, useCallback } from 'react';
import React, { useState, } from 'react';
// import { useGlobalcontex } from '../ContextAPI';

const Searchbox = () => {

   const [SearchText, setSearchText] = useState('');
   // console.log(setOfficialName, OfficialName);

   var url;
   const handleSubmit = (e) => {
      e.preventDefault();
      // setFetchDataNow_SearchBox(true);
      url = `https://restcountries.com/v3.1/name/${SearchText}`;
      getCountryData(url);
   }
   // const { IsLoading, FetchedApiData, IsServerErr } = useFetch(url);

   const [IsLoading, setIsLoading] = useState(false);
   const [IsServerErr, setIsServerErr] = useState(false);
   const [FetchedApiData, setFetchedApiData] = useState([]);

   // const getCountryData = useCallback(async (url) => {
   const getCountryData = async (url) => {
      setIsLoading(true);
      await fetch(url)
         .then((response) => {
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
         }
         );
   }
   // , [url])

   return (<>
      <form className="input-group" onSubmit={handleSubmit}>
         <div className="form-outline">
            <input type="search" id="form1" className="form-control" placeholder="search"
               value={SearchText} onChange={(e) => setSearchText(e.target.value)}
            />
         </div>
         <button type="submit" id='form1btn' className="btn btn-primary">
            <i className="bi bi-search"></i>
         </button>
      </form>
      <br />

      <SearchResult IsLoading={IsLoading} IsServerErr={IsServerErr} FetchedApiData={FetchedApiData} />
      {/* The issue here now is that SearchResult component is being re-rendered
      for every change in search box
       */}

   </>);
};

export default Searchbox;
