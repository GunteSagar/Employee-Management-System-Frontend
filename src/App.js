import logo from './logo.svg';
import './App.css';
import AddEmployee from './AddEmployee';
import ViewEmployee from './ViewEmployee';
import AdminDashboard from './AdminDashboard';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AdminDashboard/>
      <Routes>
        <Route path="/addemp" element={<AddEmployee/>}></Route>
        <Route path="/viewemp" element={<ViewEmployee/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
        <Route path="/contactus" element={<Contactus/>}></Route>
        <Route path="/services" elment={<Services/>}></Route>
      </Routes>
      </BrowserRouter>
    
     
    
     
    </div>
  );
}

export default App;
