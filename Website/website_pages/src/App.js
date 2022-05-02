import logo from "./logo.svg";
import './App.css';
import ConfigurationDropdown from "./Component/ConfigurationDropdown";
import ClustersDropdown from "./Component/ClustersDropdown";
import AuditorsDropdown from "./Component/AuditorsDropdown";
import ReviewideasDropdown from "./Component/ReviewideasDropdown";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
    <ConfigurationDropdown/>
    <ClustersDropdown/>
    <AuditorsDropdown/>
    <ReviewideasDropdown/>

  </div>


  );
}

export default App;
