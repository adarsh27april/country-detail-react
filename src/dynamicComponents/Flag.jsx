import React from 'react';
import { useGlobalcontex } from '../ContextAPI';

const Flag = () => {
   const { CountryDetail } = useGlobalcontex();

   return (<>
      {
         (!CountryDetail) ? '' : <>
            Flag and Name
            <div className="card mt-3" style={{ width: '350px', border: '0', paddingRight: '7px' }}>
               <img
                  src={`${CountryDetail.flags.svg}`}
                  className="card-img-top"
                  alt={`Flag and Name of country : ${CountryDetail.name.official}`}
               />
               <div className="card-body">
                  Official Name: <h5 className="card-title">{CountryDetail.name.official}</h5>
                  Common Name: <h5 className="card-title">{CountryDetail.name.common}</h5>
               </div>
            </div>
         </>
      }
   </>);
};

export default Flag;
