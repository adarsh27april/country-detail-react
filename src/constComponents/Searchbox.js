import SearchResult from '../dynamicComponents/SearchResult';

import React, { useState } from 'react';
import { useGlobalcontex } from '../ContextAPI';
import useFetch from '../useFetch';
const Searchbox = () => {

   const { OfficialName, setOfficialName, SearchText, setSearchText,
      FetchDataNow, setFetchDataNow, FetchedApiData, setFetchedApiData
   } = useGlobalcontex();

   // console.log(setOfficialName, OfficialName);

   const handleSubmit = (e) => {
      e.preventDefault();
      setFetchDataNow(true);
   }
   var url = `https://restcountries.com/v3.1/name/${SearchText}`;
   const { IsLoading, setIsLoading } = useFetch(url);

   // if (IsLoading == false) {
   //    console.log(FetchedApiData);
   //    setIsLoading(true);
   //    /* this is because this if block was running everytime there was some change in the searchbox*/
   // }

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

      {IsLoading ? 'nothing here' : <SearchResult />}
      {/* The issue here now is that SearchResult component is being re-rendered
      for every change in search box
       */}

   </>);
};

export default Searchbox;
