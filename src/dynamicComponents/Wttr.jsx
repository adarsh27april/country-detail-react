import React from 'react';
import { useGlobalcontex } from '../ContextAPI';
const Wttr = () => {
   const { CountryDetail } = useGlobalcontex();

   return (<>
      {(!CountryDetail) ? '' : <>
         Weather of capital city<br />
         <div>
            <img className="img-fluid rounded mt-3"
               src={`https://wttr.in/${CountryDetail.capital[0]}_tpq0_transparency=200.png`}
               alt={`weather of capital city : ${CountryDetail.capital[0]}`}
            />
         </div>
      </>
      }
   </>);
};

export default Wttr;
