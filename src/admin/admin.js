import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ViewData from "./view-data/view-data";
import { AddFolder } from './add-folder/add-folder';
   
export const Admin= ()=>{
    return (
        
        <Router>
        <Routes>
          <Route path="/" element={<ViewData />} />
          <Route path="/add" element={<AddFolder />} />
        </Routes>
      </Router>
     
    )
}
export default Admin;