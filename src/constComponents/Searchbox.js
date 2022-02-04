import React from 'react';
import { useGlobalcontex } from '../ContextAPI';
const Searchbox = () => {

   const { OfficialName, setOfficialName } = useGlobalcontex();
   console.log(setOfficialName, OfficialName);

   return (<>
      <div className="input-group">
         <div className="form-outline">
            <input type="search" id="form1" className="form-control" placeholder="search" />
         </div>
         <button type="button" id='form1btn' className="btn btn-primary">
            <i className="bi bi-search"></i>
         </button>
         <br />
      </div>
      <div id="searchedCountryData"></div>
   </>);
};

export default Searchbox;
