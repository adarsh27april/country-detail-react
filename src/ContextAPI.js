import React, { useState, useContext } from 'react';

export const OfficialNameContext = React.createContext();
export const ContextAPI = (props) => {
   const [CountryDetail, setCountryDetail] = useState();
   /**
    * Context API ka agar koi ek bhi state change hota hai to wo un
    * sabhi states ko refresh karta hai jo isme defined hoti hai.
    */

   return (
      <OfficialNameContext.Provider
         value={{
            CountryDetail, setCountryDetail
         }}
      >
         {props.children}
      </OfficialNameContext.Provider>
   );
};

// export default ContextAPI;

export const useGlobalcontex = () => {
   return useContext(OfficialNameContext);
}