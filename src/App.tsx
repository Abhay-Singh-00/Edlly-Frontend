import "./App.css";

import "react-toastify/dist/ReactToastify.css";

import AppRoutes from "./AppRoutes";
import { StrictMode } from "react";


function App() {
 
  return (
       <StrictMode>
         <AppRoutes/>
       </StrictMode>
  )
}

export default App;
