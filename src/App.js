import React from "react";
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Pages/RegistrationForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardView from "./Pages/CardView";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<RegistrationForm />} /> 
          <Route path="/loads" element={<CardView />} /> 
        </Routes>
    </div>
  );
}

export default App;
