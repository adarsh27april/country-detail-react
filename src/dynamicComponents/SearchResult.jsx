import React from 'react';

const SearchResult = (props) => {

   const { IsLoading, FetchedApiData, IsServerErr } = props;

   if (IsLoading) {
      return (<>
         Loading
      </>)
   }
   else if (IsServerErr) {
      return (<>
         Searched text not found, please type the correct text.
      </>)
   }
   else if (FetchedApiData.length != 0) {

      function compare(a, b) {
         if (a.name.official < b.name.official)
            return 1;
         if (a.name.official > b.name.official)
            return -1;
         return 0;
      }
      FetchedApiData.sort(compare);

      return (<>
         <div id="SearchList" className="overflow-auto" style={{ "maxWidth": "90%" }}>
            <ul className="list-group">
               {
                  FetchedApiData.map((country, index) => {
                     return (
                        <li key={`SearchList-${index}`}
                           className='list-group-item d-flex justify-content-between align-items-start'
                        >
                           {country.flag}&nbsp; &nbsp; &nbsp; {country.name.official}

                           <span><i className="bi bi-search" /></span>
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
