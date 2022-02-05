import React from 'react';

import { useGlobalcontex } from '../ContextAPI';

const SearchResult = () => {
   const { FetchedApiData } = useGlobalcontex();
   console.log("👇, inside search result, FetchedApiData :");
   console.log(FetchedApiData);

   return (<>
      SearchResult
      <div id="searchedCountryData"></div>
   </>);
};

export default SearchResult;
