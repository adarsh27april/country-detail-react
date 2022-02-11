import React from 'react';
import { useGlobalcontex } from '../ContextAPI';

const Flag = () => {
   const { CountryDetail } = useGlobalcontex();

   return (<>
      {
         (!CountryDetail) ? '' : <>
            Flag and Name
            <div className="card" style={{ width: '250px', border: '0' }}>
               <img src={`${CountryDetail.flags.svg}`} className="card-img-top" />
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
