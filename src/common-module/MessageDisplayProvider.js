import {  useState } from "react";
import MessageDisplayContext from './MessageDisplayContext'; 
// Step 2: Create a provider component
function MessageDisplayProvider({ children }) {
    // This state will be shared with consuming components
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);
   
    return (
      <MessageDisplayContext.Provider value={{message,messageType,setMessage,setMessageType}}>
        {children}
      </MessageDisplayContext.Provider>
    );
  }

  export default MessageDisplayProvider;