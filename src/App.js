import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WaDashboard from "./pages/wa-dashboard";
import WaTotalSales from "./pages/wa-totalsales";
import WaGrossSales from "./pages/wa-grosssales";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WaDashboard />} />
        <Route path="/total-sales" element={<WaTotalSales />} />
        <Route path="/gross-sales" element={<WaGrossSales />} />
      </Routes>
    </Router>
  );
}

export default App;