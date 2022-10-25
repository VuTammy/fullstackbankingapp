import React from "react";
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from "./components/home.js"
import CreateAccount from "./components/createaccount.js"
import Login from "./components/login.js"
import Deposit from "./components/deposit.js"
import Withdraw from "./components/withdraw.js"
import Transfer from "./components/transfer.js"
import Balance from "./components/balance.js"
import AllData from "./components/alldata.js"
import Logout from "./components/logout.js"
import NavBar from "./components/navbar.js"
import './App.css';

const UserContext = React.createContext(null);

function App() {
  return (
    <HashRouter>
      <div>
        <NavBar/>        
        <UserContext.Provider value={{users:[{name:'Tommy',email:'Tommy@gmail.com',password:'secret',balance:100}]}}>
          <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/CreateAccount/" element={<CreateAccount/>} />
            <Route path="/login/" element={<Login/>} />
            <Route path="/deposit/" element={<Deposit/>} />
            <Route path="/withdraw/" element={<Withdraw/>} />
            <Route path="/transfer/" element={<Transfer/>} />
            <Route path="/balance/" element={<Balance/>} />
            <Route path="/alldata/" element={<AllData/>} />
            <Route path="/logout/" element={<Logout/>} />
          </Routes>
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
