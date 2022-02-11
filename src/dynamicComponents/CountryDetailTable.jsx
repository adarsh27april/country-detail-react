import React from 'react';
import { useGlobalcontex } from '../ContextAPI';

const CountryDetailTable = () => {
   const { CountryDetail } = useGlobalcontex();
   let capitals = "";
   let langsSpoken = "";

   if (CountryDetail !== undefined) {
      for (let i = 0; i < CountryDetail.capital.length; i++) {
         const element = CountryDetail.capital[i];
         if (i > 0) {
            capitals += ', ';
         }
         capitals += element;
      }

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

   return (<>
      {
         (!CountryDetail) ? '' : <>
            Country detail table
            <div class="table-responsive mt-3">
               <div class="container ">

                  <table class="table table-hover table-responsive">
                     <tbody id="tbody">
                        <h3 class="">Facts</h3>
                        <tr>
                           <td>Capital</td>
                           <td>{capitals}</td>
                        </tr>
                        <tr>
                           <td>languages Spoken</td>
                           <td>{langsSpoken}</td>
                        </tr>
                        <tr>
                           <td>land Cover</td>
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
