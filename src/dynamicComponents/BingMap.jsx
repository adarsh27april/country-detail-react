import React from 'react';
import { useGlobalcontex } from '../ContextAPI';

const BingMap = () => {
   const { CountryDetail } = useGlobalcontex();

   let width = 300;
   let height = 300;
   let level = 3.5;

   return (<>
      {(!CountryDetail) ? '' : <>
         Bing Map
         <div >
            <iframe frameBorder="0"
               width={width} height={height}
               src={`https://www.bing.com/maps/embed?h=${height}&w=${width}&cp=${CountryDetail.latlng[0]}~${CountryDetail.latlng[1]}&lvl=${level}&typ=s&sty=h&src=SHELL&FORM=MBEDV8`}
               scrolling="no"
               allowFullScreen
            >
            </iframe>
            <div style={{ "whiteSpace": "nowrap", "textAlign": "center", "width": `${width / 2 + 150}px` }}>
               <a id="largeMapLink" target="_blank"
                  href={`https://www.bing.com/maps?cp=${CountryDetail.latlng[0]}~${CountryDetail.latlng[1]}&amp;sty=h&amp;lvl=${level}&amp;FORM=MBEDLD`}>
                  View Larger Map
               </a>
            </div>
         </div>
      </>
      }
   </>);
};

export default BingMap;
