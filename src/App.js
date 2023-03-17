import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WaDashboard from "./pages/wa-dashboard";

import WaTotalSales from "./pages/revenue/wa-totalsales";
import WaGrossSales from "./pages/revenue/wa-grosssales";
import WaNetSales from "./pages/revenue/wa-netsales";

import WaOrders from "./pages/orders/wa-orders";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WaDashboard />} />

        {/* Revenue Pages */}
        <Route path="/revenue/total-sales" element={<WaTotalSales />} />
        <Route path="/revenue/gross-sales" element={<WaGrossSales />} />
        <Route path="/revenue/net-sales" element={<WaNetSales />} />

        {/* Orders Pages */}
        <Route path="/orders" element={<WaOrders />} />
      </Routes>
    </Router>
  );
}

export default App;