import React from 'react';
import { Button, Spinner } from 'reactstrap';

import { useGlobalcontex } from '../ContextAPI';

const SearchResult = (props) => {

   const { IsLoading, FetchedApiData, IsServerErr } = props;
   const { setCountryDetail } = useGlobalcontex();

   // console.log('SearchResult');

   if (IsLoading) {
      return (<>
         <div className='d-flex align-items-center justify-content-center'>
            Loading List of countries...
         </div>

         <div
            className='mt-3 d-flex align-items-center justify-content-center'>
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
            ⚠️ Some error occurred. While loading search results<br /><br />
            Possible solutions:😕<br /><br />
            1. Check the text that you typed😤,<br />
            2. Check your network and try refreshing the page
         </div>
      </>)
   }
   else if (FetchedApiData.length !== 0) {

      function compare(a, b) {
         if (a.name.official < b.name.official)
            return 1;
         if (a.name.official > b.name.official)
            return -1;
         return 0;
      }
      FetchedApiData.sort(compare);

      return (<>
         <div className='d-flex align-items-center justify-content-center'>
            <h1>Search Results</h1>
         </div>
         <div className="mt-2 overflow-auto" style={{ "maxWidth": "90%", "maxHeight": "300px" }}>
            <ul className="list-group">
               {
                  FetchedApiData.map((country, index) => {
                     return (
                        <li key={`SearchList-${index}`}
                           className='list-group-item d-flex justify-content-between align-items-start'
                        >
                           {country.flag}&nbsp; &nbsp; &nbsp; {country.name.official}

                           <Button className='btn btn-secondary'
                              onClick={() => { setCountryDetail(country) }}
                           >
                              <i className="bi bi-search"></i>
                           </Button>
                        </li>
                     )
                  })
               }
            </ul>
         </div>
      </>)
   }

   return (<>

   </>);
};

export default SearchResult;
