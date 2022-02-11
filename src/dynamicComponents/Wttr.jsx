import React, { useCallback } from 'react';
import { useGlobalcontex } from '../ContextAPI';
const Wttr = () => {
   const { CountryDetail } = useGlobalcontex();

   return (<>
      {(!CountryDetail) ? '' : <>
         Weather of capital city<br />
         <div>
            <img className="img-fluid rounded"
               src={`https://wttr.in/${CountryDetail.capital[0]}_tpq0_transparency=200.png`}
            />
         </div>
      </>
      }
   </>);
};

export default Wttr;
