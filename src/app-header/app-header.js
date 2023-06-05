
import React, {
    createRef,
    useContext, useEffect
  } from "react";
import QuoteContext from "../common-module/QuoteContext";

export const AppHeader = (props) => {
    const topRef = createRef();
   const { quotes, currQuote } = useContext(QuoteContext);
   const quote = quotes.find((el) => el.id === currQuote);
    useEffect(() => {
        topRef.current.style.minHeight = 50 + "px";
        topRef.current.style.maxHeight = 50 + "px";
      });
    
    return (
      <div {...props} className="split-pane-top app-header-style" ref={topRef}>
        <div className="row">
          <div className="col-6">
          {quote.itemName} Selected
          </div>
          <div className="col-6">
          {/* <FontAwesomeIcon icon={['fas', 'coffee']} /> */}
           Logout
          </div>
        </div>
       
      </div>
    );
  };

  export default AppHeader;
