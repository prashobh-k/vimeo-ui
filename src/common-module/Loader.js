import { useContext } from "react";
import LoaderContext from "./LoaderContext";

export const Loader = () => {
    const {loaderData}=useContext(LoaderContext);
    return (loaderData?<div className="loader">
            Loading...
        </div>:<div></div>);
  };
export default Loader;