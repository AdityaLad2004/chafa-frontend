// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Ensure the Navbar is imported
import Dashboard from "./pages/Dashboard"; // Ensure the Dashboard page is imported
import Analytics from "./pages/Analytics"; // Import BlogAnalytics page
import Portal from "./pages/Portal"; // Ensure BlogPortal is imported


const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-gray-200">
        <Navbar />
        <Routes>
          {/* Route for Dashboard */}
          <Route path="/" element={<Dashboard />} />
          {/* Route for Blog Analytics */}
          <Route path="/analytics" element={<Analytics />} />
          {/* You can add other routes here */}
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
