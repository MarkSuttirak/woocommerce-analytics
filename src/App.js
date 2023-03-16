import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WaDashboard from "./pages/wa-dashboard";
import WaTotalSales from "./pages/wa-totalsales";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WaDashboard />} />
        <Route path="/total-sales" element={<WaTotalSales />} />
      </Routes>
    </Router>
  );
}

export default App;