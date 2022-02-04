import React, { useState, useContext } from 'react';


export const OfficialNameContext = React.createContext();
export const ContextAPI = (props) => {
   const [OfficialName, setOfficialName] = useState('default value');

   return (
      <OfficialNameContext.Provider
         value={{
            OfficialName,
            setOfficialName
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