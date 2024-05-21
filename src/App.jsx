import {useState, useEffect} from "react";
import {Routes,Route,useLocation} from "react-router-dom";
import HomePage from "./views/HomePage";

import Navbar from "./components/NavBar";
import LoginPage from "./views/LoginPage";
import AboutPage from "./views/AboutPage";
import DetailPage from "./views/DetailPage";
import ErrorPage from "./components/ErrorPage";

import "./App.css";

function App() {
  const location = useLocation();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  });

  return (
    
    <div className="App">
      {location.pathname !== "/" && <Navbar/>}
      
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage contacts={contacts} />} />
        <Route path="/about" element= {<AboutPage/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
