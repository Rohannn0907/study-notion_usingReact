import './App.css';
import Navbar from './Components/Navbar'; 
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import { useState } from 'react';
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="min-h-screen bg-richblack-900 flex flex-col">
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/signup"
              element={<Signup setIsLoggedIn={setIsLoggedIn} />}
            />
            
              <Route path="/dashboard"
               element={
               <PrivateRoute isLoggedIn={isLoggedIn}>
               <Dashboard />
            </PrivateRoute>
               }
               />
          </Routes>
        </div>
      );
}

export default App;
