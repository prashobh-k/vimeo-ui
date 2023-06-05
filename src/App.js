import './App.css';
import AppHeader  from './app-header/app-header';
import LeftNav from './left-nav/left-nav';
import { useState } from "react";
import MainContent ,{Body} from './body-content/main-content';
import QuoteContext from './common-module/QuoteContext';
import SplitPane from './common-module/SplitPane';
import Divider from './common-module/Divider';
import MessageDisplayProvider from './common-module/MessageDisplayProvider';
import MessageDisplay from './common-module/MessageDisplay';
import LoaderContextProvider from './common-module/LoaderContextProvider';
import Loader from './common-module/Loader';
const quotes = [
  {
    id: 1,
    itemName: "Add",
    path: "/add"
  },
  {
    id: 2,
    itemName: "View",
    path: "/view"
  },
  {
    id: 3,
    itemName: "Upload",
    path: "/upload"
  },
];
function App() {
  const [currQuote, setCurrQuote] = useState(1);

  return (
  <div className="App">
      <QuoteContext.Provider value={{ quotes, currQuote, setCurrQuote }}>
        <SplitPane className="split-pane-col" >
         
          <AppHeader />
          <Divider className="separator" />

          <MainContent>
          <SplitPane className="split-pane-row">
          <LeftNav/>
             <Divider className="separator" />
             <MessageDisplayProvider>
             <MessageDisplay ></MessageDisplay>
             <LoaderContextProvider>
            <Loader></Loader>
                <Body/>
                </LoaderContextProvider>
            </MessageDisplayProvider>
             
            </SplitPane>
          </MainContent>
         
        </SplitPane>
      </QuoteContext.Provider>
      </div>
  );
}

export default App;
