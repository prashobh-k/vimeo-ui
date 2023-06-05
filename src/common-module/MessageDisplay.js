import {  useCallback, useContext, useEffect } from "react";
import MessageDisplayContext from "./MessageDisplayContext";




// this is context consumer
export const MessageDisplay = () => {
    const { message, messageType,setMessage } = useContext(MessageDisplayContext);
    useEffect(() => {
        if(message){
            setTimeout(()=>{
                setMessage(null) 
             },5000);
        }
   
        },[setMessage,message]);
     
    const closeMessage = useCallback(() => {
        setMessage(null); 
    }, [message,setMessage]);

    const classes = messageType==='success' ? 'success-message-display' : 'error-message-display';
    return(message? <div className={classes}>
        {message}
        <button onClick={ closeMessage}>close</button>
        </div>:<div></div>);
  };
export default MessageDisplay;