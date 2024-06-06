import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { auth } from "./firebase"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");
        navigate('/login');
      } else {
        console.log("Logged Out");
        navigate('/');
      }
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <ToastContainer  theme="dark"/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Home />} />
        <Route path="/player/:id" element={<Player/>} />
      </Routes>
    </div>
  );
};

export default App;
