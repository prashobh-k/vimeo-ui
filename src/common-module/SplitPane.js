import React, {
    useEffect,
    useRef,
    useState,
  } from "react";
  import SplitPaneContext from "./SplitPaneContext";
  
  const SplitPane = ({ children, ...props }) => {
    const [clientHeight, setClientHeight] = useState(null);
    const [clientWidth, setClientWidth] = useState(null);
    const yDividerPos = useRef(null);
    const xDividerPos = useRef(null);
  
    const onMouseHoldDown = (e) => {
      yDividerPos.current = e.clientY;
      xDividerPos.current = e.clientX;
    };
  
    const onMouseHoldUp = () => {
      yDividerPos.current = null;
      xDividerPos.current = null;
    };
  
    const onMouseHoldMove = (e) => {
      if (!yDividerPos.current && !xDividerPos.current) {
        return;
      }
  
      setClientHeight(clientHeight + e.clientY - yDividerPos.current);
      setClientWidth(clientWidth + e.clientX - xDividerPos.current);
  
      yDividerPos.current = e.clientY;
      xDividerPos.current = e.clientX;
    };
  
    useEffect(() => {
      document.addEventListener("mouseup", onMouseHoldUp);
      document.addEventListener("mousemove", onMouseHoldMove);
  
      return () => {
        document.removeEventListener("mouseup", onMouseHoldUp);
        document.removeEventListener("mousemove", onMouseHoldMove);
      };
    });
  
    return (
      <div {...props}>
        <SplitPaneContext.Provider
          value={{
            clientHeight,
            setClientHeight,
            clientWidth,
            setClientWidth,
            onMouseHoldDown,
          }}
        >
          {children}
        </SplitPaneContext.Provider>
      </div>
    );
  };

  
  export default SplitPane;
