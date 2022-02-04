import React, { useState } from 'react';
import { useGlobalcontex } from '../ContextAPI';
const Searchbox = () => {

   const [SearchText, setSearchText] = useState('');
   const { OfficialName, setOfficialName } = useGlobalcontex();

   // console.log(setOfficialName, OfficialName);

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("search text: ", SearchText);
   }

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
   </>);
};

export default Searchbox;
