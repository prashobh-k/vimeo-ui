import { useContext } from "react";
import SplitPaneContext from "./SplitPaneContext";

export const Divider = (props) => {
    const { onMouseHoldDown } = useContext(SplitPaneContext);
  
    return <div {...props} onMouseDown={onMouseHoldDown} />;
  };
export default Divider;