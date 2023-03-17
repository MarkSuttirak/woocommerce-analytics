import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WaDashboard from "./pages/wa-dashboard";

import WaTotalSales from "./pages/revenue/wa-totalsales";
import WaGrossSales from "./pages/revenue/wa-grosssales";
import WaNetSales from "./pages/revenue/wa-netsales";
import WaReturns from "./pages/revenue/wa-returns";

import WaOrders from "./pages/orders/wa-orders";
import WaOrderNetSales from "./pages/orders/wa-ordersnetsales";

import WaItemsSold from "./pages/products/wa-itemssold";
import WaProductNetSales from "./pages/products/wa-productnetsales";
import WaProductOrders from "./pages/products/wa-productorders";

import WaVariationsSold from "./pages/variations/wa-variationsold";

import WaDownloads from "./pages/downloads/wa-downloads";

import WaTotalTax from "./pages/taxes/wa-totaltax";

import WaDiscounted from "./pages/coupons/wa-discounted";
import WaAmount from "./pages/coupons/wa-amount";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WaDashboard />} />

        {/* Revenue Pages */}
        <Route path="/revenue/total-sales" element={<WaTotalSales />} />
        <Route path="/revenue/gross-sales" element={<WaGrossSales />} />
        <Route path="/revenue/net-sales" element={<WaNetSales />} />
        <Route path="/revenue/returns" element={<WaReturns />} />

        {/* Orders Pages */}
        <Route path="/orders" element={<WaOrders />} />
        <Route path="/orders/net-sales" element={<WaOrderNetSales />} />

        {/* Products Pages */}
        <Route path="/products/items-sold" element={<WaItemsSold />} />
        <Route path="/products/net-sales" element={<WaProductNetSales />} />
        <Route path="/products/orders" element={<WaProductOrders />} />

        {/* Variations Pages */}
        <Route path="/variations/variations-sold" element={<WaVariationsSold />} />

        {/* Downloads Pages */}
        <Route path="/downloads" element={<WaDownloads />} />

        {/* Taxes Pages */}
        <Route path="/taxes/total-tax" element={<WaTotalTax />} />

        {/* Coupon Pages */}
        <Route path="/coupons/discounted-orders" element={<WaDiscounted />} />
        <Route path="/coupons/amount" element={<WaAmount />} />
      </Routes>
    </Router>
  );
}

export default App;