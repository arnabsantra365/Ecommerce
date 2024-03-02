import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import BusinessListing from './components/BusinessListing';
import Landing from './components/Landing';
import BusinessForm from './components/BusinessForm';
import SearchApp from './components/SearchApp';




function App() {
  return (
    <>
    <Router>
    
    <div> 
    <Nav/>
    
    < Routes>
         
          <Route exact path="/about" element={ <Landing/>}/>
          
        
          
          <Route exact path="/service" element={[
              
    <div className=" bg-slate-200 "><SearchApp/></div>,
    
    <BusinessForm/>,
    <BusinessListing/>]}>
          </Route>
          <Route exact path="/" element={
          <Home/>}>
          </Route>
           
        </ Routes>
    
    
  
   
    </div>
    </Router>
    </>
    
  );
}

export default App;
