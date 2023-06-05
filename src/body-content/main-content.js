
import React, {
     createRef
  } from "react";
import Admin from "../admin/admin";

export const MainContent = (props) => {
    const topRef = createRef();
  
return (
  <div {...props} className="split-pane-bottom" ref={topRef}>
   
  </div>
);
}

export const Body = (props) =>{
    return (
        <div {...props} className="split-pane-right screen-body">
          <Admin/>
        </div>
      );
}

  export default MainContent;
