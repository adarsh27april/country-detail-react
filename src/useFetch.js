import { useState, useEffect } from "react";
import { useGlobalcontex } from "./ContextAPI";

const useFetch = (url) => {
   const [IsLoading, setIsLoading] = useState(true);
   const { FetchDataNow, setFetchDataNow, FetchedApiData, setFetchedApiData } = useGlobalcontex();

   const getCountryData = async () => {
      await fetch(url)
         .then((response) => {
            return response.json();
         })
         .then((data) => {
            setFetchedApiData(data);
            setIsLoading(false);
         })
         .catch((error) => {
            console.log('Error during fetch: ' + error.message);
         }
         );
   }
   useEffect(() => {
      if (FetchDataNow == true) {
         console.log("inside useFetch : " + url);
         getCountryData();
      }
      return () => {
         setFetchDataNow(false);
      }
   }, [FetchDataNow]);
   /**
    * what was happening : earlier dependenciy list of useFetch ==>> [url], so everytime someone was inputing
    * anything in the url then useFetch was called everytime.
    * 
    * Solution: Now dependency list of ueFetch ==>> [FetchDataNow].
    * useState Hook FetchDataNow is initially `false`, when changed to `true` then *only* useFetch will work.
    * and at the end it is again set to `false`
    */

   return { IsLoading, setIsLoading };
};

export default useFetch;
