import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WaDashboard from "./pages/wa-dashboard";

import WaTotalSales from "./pages/revenue/wa-totalsales";
import WaGrossSales from "./pages/revenue/wa-grosssales";
import WaNetSales from "./pages/revenue/wa-netsales";
import WaReturns from "./pages/revenue/wa-returns";
import WaRevenueCoupons from "./pages/revenue/wa-revenuecoupons";
import WaRevenueTaxes from "./pages/revenue/wa-revenuetaxes";
import WaRevenueShipping from "./pages/revenue/wa-revenueshipping";

import WaOrders from "./pages/orders/wa-orders";
import WaOrderNetSales from "./pages/orders/wa-ordersnetsales";
import WaAverageOrderValue from "./pages/orders/wa-aov";
import WaAverageItemsPerOrder from "./pages/orders/wa-averageitems";

import WaItemsSold from "./pages/products/wa-itemssold";
import WaProductNetSales from "./pages/products/wa-productnetsales";
import WaProductOrders from "./pages/products/wa-productorders";

import WaVariationsSold from "./pages/variations/wa-variationsold";
import WaVariationsNetSales from "./pages/variations/wa-netsalesvariation";
import WaVariationsOrders from "./pages/variations/wa-ordersvariation";

import WaDownloads from "./pages/downloads/wa-downloads";

import WaTotalTax from "./pages/taxes/wa-totaltax";
import WaOrderTax from "./pages/taxes/wa-ordertax";
import WaShippingTax from "./pages/taxes/wa-shippingtax";
import WaOrdersofTax from "./pages/taxes/wa-ordersoftax";

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
        <Route path="/revenue/coupons" element={<WaRevenueCoupons />} />
        <Route path="/revenue/taxes" element={<WaRevenueTaxes />} />
        <Route path="/revenue/shipping" element={<WaRevenueShipping />} />

        {/* Orders Pages */}
        <Route path="/orders" element={<WaOrders />} />
        <Route path="/orders/net-sales" element={<WaOrderNetSales />} />
        <Route path="/orders/average-order-value" element={<WaAverageOrderValue />} />
        <Route path="/orders/average-items-per-order" element={<WaAverageItemsPerOrder />} />

        {/* Products Pages */}
        <Route path="/products/items-sold" element={<WaItemsSold />} />
        <Route path="/products/net-sales" element={<WaProductNetSales />} />
        <Route path="/products/orders" element={<WaProductOrders />} />

        {/* Variations Pages */}
        <Route path="/variations/variations-sold" element={<WaVariationsSold />} />
        <Route path="/variations/net-sales" element={<WaVariationsNetSales />} />
        <Route path="/variations/orders" element={<WaVariationsOrders />} />

        {/* Downloads Pages */}
        <Route path="/downloads" element={<WaDownloads />} />

        {/* Taxes Pages */}
        <Route path="/taxes/total-tax" element={<WaTotalTax />} />
        <Route path="/taxes/order-tax" element={<WaOrderTax />} />
        <Route path="/taxes/shipping-tax" element={<WaShippingTax />} />
        <Route path="/taxes/orders" element={<WaOrdersofTax />} />

        {/* Coupon Pages */}
        <Route path="/coupons/discounted-orders" element={<WaDiscounted />} />
        <Route path="/coupons/amount" element={<WaAmount />} />
      </Routes>
    </Router>
  );
}

export default App;