import {  useState } from "react";
import LoaderContext from "./LoaderContext";

function LoaderContextProvider({ children }) {
    // This state will be shared with consuming components
    const [loaderData, setLoaderData] = useState(false);
   
    return (
      <LoaderContext.Provider value={{loaderData,setLoaderData}}>
        {children}
      </LoaderContext.Provider>
    );
  }



export default LoaderContextProvider;