import React from 'react';
import { useGlobalcontex } from '../ContextAPI';

const CountryDetailTable = () => {
   const { CountryDetail } = useGlobalcontex();
   let capitals = "";
   let langsSpoken = "";
   if (CountryDetail !== undefined) {
      if (CountryDetail.capital !== undefined) {
         for (let i = 0; i < CountryDetail.capital.length; i++) {
            const element = CountryDetail.capital[i];
            if (i > 0) {
               capitals += ', ';
            }
            capitals += element;
         }
      }
      if (CountryDetail.languages !== undefined) {
         let langsSpokenArr = Object.values(CountryDetail.languages);
         // console.log(langsSpokenArr);
         for (let i = 0; i < langsSpokenArr.length; i++) {
            const element = langsSpokenArr[i];
            if (i > 0) {
               langsSpoken += ', ';
            }
            langsSpoken += element;
         }
      }
   }
   return (<>
      {
         (!CountryDetail) ? '' : <>
            Country detail table
            <div className="table-responsive mt-3">
               <div className="container ">
                  <h3 className="">Facts</h3>
                  <table className="table table-hover table-responsive">
                     <tbody id="tbody">
                        {(capitals == "") ? <tr></tr> :
                           <tr>
                              <td>Capital</td>
                              <td>{capitals}</td>
                           </tr>
                        }
                        {(langsSpoken == "") ? <tr></tr> :
                           <tr>
                              <td>Languages Spoken</td>
                              <td>{langsSpoken}</td>
                           </tr>
                        }
                        <tr>
                           <td>Land Cover</td>
                           <td>{CountryDetail.area} sq. KM</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </>
      }
   </>)
};

export default CountryDetailTable;
