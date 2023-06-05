import React, {
    createRef,
    useContext,
    useEffect
  } from "react";
import QuoteContext from "../common-module/QuoteContext";
import { Link } from "react-router-dom";

export const LeftNav = (props) => {
    const topRef = createRef();
      const { quotes, setCurrQuote,currQuote } = useContext(QuoteContext);

    useEffect(() => {
      topRef.current.style.minWidth = 100 + "px";
      topRef.current.style.maxWidth = 100 + "px";
    });
  
    return (<div {...props} className="split-pane-left left-nav-style" ref={topRef}>
           
              {quotes.map((el, i) => {
                return (
                  <div key={i} className={el.id===currQuote ? 'left-nav-content selected' : 'left-nav-content'}
                   onClick={() => setCurrQuote(el.id)}>
                    {/* <Link to="{el.path}"> {el.itemName}</Link>
                      */}
                    
                  </div>
                );
              })}
           
          </div>);
  };
  export default LeftNav;
