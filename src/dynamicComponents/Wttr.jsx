import React from 'react';
import { useGlobalcontex } from '../ContextAPI';
const Wttr = () => {
   const { CountryDetail } = useGlobalcontex();
   let capital = '';
   if (CountryDetail !== undefined) {
      if (CountryDetail.capital !== undefined) {
         capital = CountryDetail.capital[0];
      }
   }
   return (<>
      {(!CountryDetail) ? '' : <>
         Weather of capital city &nbsp;&nbsp; {capital}<br />
         <div>
            <br />
            {(capital == '') ? `No Capital City for : ${CountryDetail.name.official}` :
               <img className="img-fluid rounded mt-3"
                  src={`https://wttr.in/${capital}_tpq0_transparency=200.png`}
                  alt={`weather of capital city : ${capital}`}
               />
            }
         </div>
      </>
      }
   </>);
};

export default Wttr;
