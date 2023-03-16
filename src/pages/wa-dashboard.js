import React, { useState, useEffect } from 'react';
import '../App.css';
import { Typography, Select, Space, Card, Button, DatePicker, Dropdown, Modal, Switch, Input, Table, Drawer } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipse, faEllipsisVertical, faChartSimple, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Line, Column } from '@ant-design/plots';
import { Link } from 'react-router-dom';

function WaDashboard() {
  const { RangePicker } = DatePicker;
  const { Title, Text, Paragraph } = Typography;
  const dateOptions = [
    { value: 'today', label: 'Today' }, 
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'week to date', label: 'Week to date' },
    { value: 'month to date', label: 'Month to date' },
    { value: 'quarter to date', label: 'Quarter to date' },
    { value: 'year to date', label: 'Year to date' },
    { value: 'last week', label: 'Last week' },
    { value: 'last month', label: 'Last month' },
    { value: 'last quarter', label: 'Last quarter' },
    { value: 'last year', label: 'Last year' }
  ];

  const DemoLine = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      asyncFetch();
    }, []);
  
    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    const config = {
      data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        // type: 'timeCat',
        tickCount: 5,
      },
    };
  
    return <Line {...config} />;
  };

  const DemoColumn = () => {
    const data = [
      {
        type: '家具家电',
        sales: 38,
      },
      {
        type: '粮油副食',
        sales: 52,
      },
      {
        type: '生鲜水果',
        sales: 61,
      },
      {
        type: '美容洗护',
        sales: 145,
      },
      {
        type: '母婴用品',
        sales: 48,
      },
      {
        type: '进口食品',
        sales: 38,
      },
      {
        type: '食品饮料',
        sales: 38,
      },
      {
        type: '家庭清洁',
        sales: 38,
      },
    ];
    const config = {
      data,
      xField: 'type',
      yField: 'sales',
      label: {
        position: 'middle',
        // 'top', 'bottom', 'middle',
        style: {
          fill: '#FFFFFF',
          opacity: 0.6,
        },
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      meta: {
        type: {
          alias: '类别',
        },
        sales: {
          alias: '销售额',
        },
      },
    };
    return <Column {...config} />;
  };
  
  const comparisonOptions = [
    { value: 'previous period', label: 'Previous period' },
    { value: 'previous year', label: 'Previous year' }
  ];

  const [performanceOptions, setPerformanceOptions] = useState(false);
  const showPerformanceOptions = () => {
    setPerformanceOptions(true);
  };
  const PerformanceCancel = () => {
    setPerformanceOptions(false);
  };

  const [chartOptions, setChartOptions] = useState(false);
  const showChartOptions = () => {
    setChartOptions(true);
  };
  const ChartCancel = () => {
    setChartOptions(false);
  };

  const [LeaderOptions, setLeaderOptions] = useState(false);
  const showLeaderOptions = () => {
    setLeaderOptions(true);
  };
  const LeaderCancel = () => {
    setLeaderOptions(false);
  };

  const [lineChart, setLineChart] = useState(true);
  const [barChart, setBarChart] = useState(false);

  const showLineChart = () => {
    setLineChart(true);
    setBarChart(false);
  }

  const showBarChart = () => {
    setBarChart(true);
    setLineChart(false);
  }

  const topCustomersData = [
    {
      key: '1',
      customerName: 'Test Jack',
      orders: 1,
      totalSpend: '$100',
    },
    {
      key: '2',
      customerName: 'Test Johnson',
      orders: 1,
      totalSpend: '$10',
    },
  ];
  
  const topCustomersColumns = [
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Orders',
      dataIndex: 'orders',
      key: 'orders',
    },
    {
      title: 'Total Spend',
      dataIndex: 'totalSpend',
      key: 'totalSpend',
    },
  ];

  const topProductData = [
    {
      key: '1',
      product: 'Deutsches Buch',
      itemsSold: 10,
      netSales: '$100',
    },
    {
      key: '2',
      product: 'Product Test',
      itemsSold: 1,
      netSales: '$20',
    },
    {
      key: '3',
      product: 'Also product test',
      itemsSold: 1,
      netSales: '$30',
    },
  ];
  
  const topProductColumns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Items sold',
      dataIndex: 'itemsSold',
      key: 'itemsSold',
    },
    {
      title: 'Net sales',
      dataIndex: 'netSales',
      key: 'netSales',
    },
  ];

  const topCouponData = [
    {
      key: '1',
      coupon: 'Gutschein',
      itemsSold: 10,
      netSales: '$100',
    },
    {
      key: '2',
      coupon: 'coupon Test',
      itemsSold: 1,
      netSales: '$20',
    },
    {
      key: '3',
      coupon: 'Also coupon test',
      itemsSold: 1,
      netSales: '$30',
    },
  ];
  
  const topCouponColumns = [
    {
      title: 'Coupon',
      dataIndex: 'coupon',
      key: 'coupon',
    },
    {
      title: 'Items sold',
      dataIndex: 'itemsSold',
      key: 'itemsSold',
    },
    {
      title: 'Net sales',
      dataIndex: 'netSales',
      key: 'netSales',
    },
  ];

  const topCategoriesData = [
    {
      key: '1',
      category: 'Deutsche Kategorie',
      itemsSold: 10,
      netSales: '$100',
    },
    {
      key: '2',
      category: 'Category Test',
      itemsSold: 1,
      netSales: '$20',
    },
    {
      key: '3',
      category: 'Also category test',
      itemsSold: 1,
      netSales: '$30',
    },
  ];
  
  const topCategoriesColumns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Items sold',
      dataIndex: 'itemsSold',
      key: 'itemsSold',
    },
    {
      title: 'Net sales',
      dataIndex: 'netSales',
      key: 'netSales',
    },
  ];

  const [totalSales, setTotalSales] = useState(true);
  const [netSales, setNetSales] = useState(true);
  const [orders, setOrders] = useState(true);
  const [productsSold, setProductsSold] = useState(true);
  const [variationsSold, setVariationsSold] = useState(true);
  const [averageOrderValue, setAverageOrderValue] = useState(false);
  const [returns, setReturns] = useState(false);
  const [discountedOrders, setDiscountedOrders] = useState(false);
  const [netDiscount, setNetDiscount] = useState(false);
  const [totalTax, setTotalTax] = useState(false);
  const [orderTax, setOrderTax] = useState(false);
  const [shippingTax, setShippingTax] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [grossSales, setGrossSales] = useState(false);
  const [downloads, setDownloads] = useState(false);

  const [totalSalesChart, setTotalSalesChart] = useState(false);
  const [netSalesChart, setNetSalesChart] = useState(true);
  const [ordersChart, setOrdersChart] = useState(true);
  const [averageOrdersChart, setAverageOrdersChart] = useState(false);
  const [itemsSoldChart, setItemsSoldChart] = useState(false);
  const [returnsChart, setReturnsChart] = useState(false);
  const [discountedOrdersChart, setDiscountedOrdersChart] = useState(false);
  const [grossDiscountedChart, setGrossDiscountedChart] = useState(false);
  const [totalTaxChart, setTotalTaxChart] = useState(false);
  const [orderTaxChart, setOrderTaxChart] = useState(false);
  const [shippingTaxChart, setShippingTaxChart] = useState(false);
  const [shippingChart, setShippingChart] = useState(false);
  const [downloadsChart, setDownloadsChart] = useState(false);

  const [topCustomers, setTopCustomers] = useState(false);
  const [topCoupons, setTopCoupons] = useState(false);
  const [topCategories, setTopCategories] = useState(true);
  const [topProducts, setTopProducts] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
      <div className='d-inline-block'>
          <Paragraph>Date range:</Paragraph>
          <Select placeholder="Select a date range" style={{width: 300}} options={dateOptions} />
        </div>
        <div className='d-inline-block ms-2'>
          <Paragraph>Compare to:</Paragraph>
          <Select placeholder="Compare to" style={{width: 300}} options={comparisonOptions} />
        </div>
        <div className='d-inline-block ms-2'>
          <Paragraph>Custom date range:</Paragraph>
          <RangePicker />
        </div>
      </header>
      
      <div className='mt-4 performance'>
          <div className='row'>
            <div className='col-sm-6'>
              <Title level={2}>Performance</Title>
            </div>
            <div className='col-sm-6 text-end'>
              <Button type="ghost" onClick={showPerformanceOptions}>
                <FontAwesomeIcon icon={faEllipsisVertical}/>
              </Button>
            </div>
          </div>
          <div className='row'>
            {
              (totalSales) && (
                  <div className='col-sm'>
                  <Link to="/total-sales">
                    <Card>
                        <Paragraph>Total sales</Paragraph>
                        <Title level={3} className="row">
                            <div className='col-sm-6'>
                            $0.00
                            </div>
                            <div className='col-sm-6 text-end'>
                            0%
                            </div>
                        </Title>
                    </Card>
                  </Link>
                </div>
              )
            }
            {
              (netSales) && (
              <div className='col-sm'>
                <Link to="/total-sales">
                    <Card>
                    <Paragraph>Net sales</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                            $0.00
                        </div>
                        <div className='col-sm-6 text-end'>
                            0%
                        </div>
                    </Title>
                    </Card>
                </Link>
              </div>
              )
            }
            {
              (orders) && (
                <div className='col-sm'>
                  <Card>
                    <Paragraph>Orders</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                          0
                        </div>
                        <div className='col-sm-6 text-end'>
                          0%
                        </div>
                    </Title>
                  </Card>
                </div>
              )
            }
            {
              (productsSold) && (
                <div className='col-sm'>
                  <Card>
                    <Paragraph>Products sold</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                          0
                        </div>
                        <div className='col-sm-6 text-end'>
                          0%
                        </div>
                    </Title>
                  </Card>
                </div>
              )
            }
            {
              (returns) && (
                  <div className='col-sm'>
                <Link to="/total-sales">
                  <Card>
                    <Paragraph>Returns</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                          $0.00
                        </div>
                        <div className='col-sm-6 text-end'>
                          0%
                        </div>
                    </Title>
                  </Card>
                </Link>
                </div>
              )
            }
            {
              (discountedOrders) && (
                  <div className='col-sm'>
                  <Card>
                    <Paragraph>Discounted orders</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                          0
                        </div>
                        <div className='col-sm-6 text-end'>
                          0%
                        </div>
                    </Title>
                  </Card>
                </div>
              )
            }
            {
              (netDiscount) && (
                  <div className='col-sm'>
                  <Card>
                    <Paragraph>Net discount amount</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                          $0.00
                        </div>
                        <div className='col-sm-6 text-end'>
                          0%
                        </div>
                    </Title>
                  </Card>
                </div>
              )
            }
            {
              (totalTax) && (
                  <div className='col-sm'>
                  <Card>
                    <Paragraph>Total tax</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                          $0.00
                        </div>
                        <div className='col-sm-6 text-end'>
                          0%
                        </div>
                    </Title>
                  </Card>
                </div>
              )
            }
            {
              (orderTax) && (
                  <div className='col-sm'>
                  <Card>
                    <Paragraph>Order tax</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                          $0.00
                        </div>
                        <div className='col-sm-6 text-end'>
                          0%
                        </div>
                    </Title>
                  </Card>
                </div>
              )
            }
            {
              (shippingTax) && (
                  <div className='col-sm'>
                  <Card>
                    <Paragraph>Shipping tax</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                          $0.00
                        </div>
                        <div className='col-sm-6 text-end'>
                          0%
                        </div>
                    </Title>
                  </Card>
                </div>
              )
            }
            {
              (shipping) && (
                  <div className='col-sm'>
                    <Link to="/total-sales">
                  <Card>
                    <Paragraph>Shipping</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                          $0.00
                        </div>
                        <div className='col-sm-6 text-end'>
                          0%
                        </div>
                    </Title>
                  </Card>
                  </Link>
                </div>
              )
            }
            {
              (downloads) && (
                  <div className='col-sm'>
                  <Card>
                    <Paragraph>Downloads</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                          0
                        </div>
                        <div className='col-sm-6 text-end'>
                          0%
                        </div>
                    </Title>
                  </Card>
                </div>
              )
            }
            {
              (grossSales) && (
                  <div className='col-sm'>
                <Link to="/gross-sales">
                  <Card>
                    <Paragraph>Gross sales</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                          $0.00
                        </div>
                        <div className='col-sm-6 text-end'>
                          0%
                        </div>
                    </Title>
                  </Card>
                  </Link>
                </div>
              )
            }
            {
              (variationsSold) && (
                  <div className='col-sm'>
                  <Card>
                    <Paragraph>Variations Sold</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                          0
                        </div>
                        <div className='col-sm-6 text-end'>
                          0%
                        </div>
                    </Title>
                  </Card>
                </div>
              )
            }
            {
              (averageOrderValue) && (
                  <div className='col-sm'>
                  <Card>
                    <Paragraph>Average Order Value</Paragraph>
                    <Title level={3} className="row">
                        <div className='col-sm-6'>
                          $0.00
                        </div>
                        <div className='col-sm-6 text-end'>
                          0%
                        </div>
                    </Title>
                  </Card>
                </div>
              )
            }
            
          </div>
      </div>

      <div className='mt-4 charts'>
        <div className='row'>
          <div className='col-sm-6'>
            <Title level={2}>Charts</Title>
          </div>
          <div className='col-sm-6 text-end'>
            <Select 
                defaultValue="byday"
                options={[
                    {value: 'byday', label: 'By day'},
                    {value: 'byweek', label: 'By week'},
                ]}
            />
            <Space>
                <Button type="ghost" onClick={showLineChart}>
                    <FontAwesomeIcon icon={faChartLine}/>
                </Button>
                <Button type="ghost" onClick={showBarChart}>
                    <FontAwesomeIcon icon={faChartSimple}/>
                </Button>
                <Button type="ghost" onClick={showChartOptions}>
                    <FontAwesomeIcon icon={faEllipsisVertical}/>
                </Button>
            </Space>
          </div>
        </div>
        <div className='row'>
          {
            (totalSalesChart) && (
              <div className='col-sm-6 my-2'>
                <Card title="Total sales">
                  { (lineChart && <DemoLine /> ) }
                  { (barChart && <DemoColumn />)}
                </Card>
              </div>
            )
          }
          {
            (netSalesChart) && (
              <div className='col-sm-6 my-2'>
                <Card title="Net sales">
                { (lineChart && <DemoLine /> ) }
                  { (barChart && <DemoColumn />)}
                </Card>
              </div>
            )
          }
          {
            (ordersChart) && (
              <div className='col-sm-6 my-2'>
                <Card title="Orders">
                { (lineChart && <DemoLine /> ) }
                  { (barChart && <DemoColumn />)}
                </Card>
              </div>
            )
          }
          {
            (averageOrdersChart) && (
              <div className='col-sm-6 my-2'>
                <Card title="Average order value">
                { (lineChart && <DemoLine /> ) }
                  { (barChart && <DemoColumn />)}
                </Card>
              </div>
            )
          }
          {
            (itemsSoldChart) && (
              <div className='col-sm-6 my-2'>
                <Card title="Items sold">
                { (lineChart && <DemoLine /> ) }
                  { (barChart && <DemoColumn />)}
                </Card>
              </div>
            )
          }
          {
            (returnsChart) && (
              <div className='col-sm-6 my-2'>
                <Card title="Returns">
                { (lineChart && <DemoLine /> ) }
                  { (barChart && <DemoColumn />)}
                </Card>
              </div>
            )
          }
          {
            (discountedOrdersChart) && (
              <div className='col-sm-6 my-2'>
                <Card title="Discounted orders">
                { (lineChart && <DemoLine /> ) }
                  { (barChart && <DemoColumn />)}
                </Card>
              </div>
            )
          }
          {
            (grossDiscountedChart) && (
              <div className='col-sm-6 my-2'>
                <Card title="Gross discounted">
                { (lineChart && <DemoLine /> ) }
                  { (barChart && <DemoColumn />)}
                </Card>
              </div>
            )
          }
          {
            (totalTaxChart) && (
              <div className='col-sm-6 my-2'>
                <Card title="Total tax">
                { (lineChart && <DemoLine /> ) }
                  { (barChart && <DemoColumn />)}
                </Card>
              </div>
            )
          }
          {
            (orderTaxChart) && (
              <div className='col-sm-6 my-2'>
                <Card title="Order tax">
                { (lineChart && <DemoLine /> ) }
                  { (barChart && <DemoColumn />)}
                </Card>
              </div>
            )
          }
          {
            (shippingTaxChart) && (
              <div className='col-sm-6 my-2'>
                <Card title="Shipping tax">
                { (lineChart && <DemoLine /> ) }
                  { (barChart && <DemoColumn />)}
                </Card>
              </div>
            )
          }
          {
            (shippingChart) && (
              <div className='col-sm-6 my-2'>
                <Card title="Shipping">
                { (lineChart && <DemoLine /> ) }
                  { (barChart && <DemoColumn />)}
                </Card>
              </div>
            )
          }
          {
            (downloadsChart) && (
              <div className='col-sm-6 my-2'>
                <Card title="Downloads">
                { (lineChart && <DemoLine /> ) }
                  { (barChart && <DemoColumn />)}
                </Card>
              </div>
            )
          }
        </div>
      </div>

      <div className='mt-4 leaderboards card-with-table'>
        <div className='row'>
            <div className='col-sm-6'>
              <Title level={2}>Leaderboards</Title>
            </div>
            <div className='col-sm-6 text-end'>
              <Button type="ghost" onClick={showLeaderOptions}>
                <FontAwesomeIcon icon={faEllipsisVertical}/>
              </Button>
            </div>
          </div>
          <div className='row'>
            {
              (topCustomers) && (
              <div className='col-sm-6 my-2'>
                <Card title="Top Customers - Total Spend">
                  <Table dataSource={topCustomersData} columns={topCustomersColumns} />
                </Card>
              </div>
              )
            }
            {
              (topCoupons) && (
                <div className='col-sm-6 my-2'>
                  <Card title="Top Coupons - Number of Orders">
                    <Table dataSource={topCouponData} columns={topCouponColumns} />
                  </Card>
                </div>
              )
            }
            {
              (topCategories) && (
                <div className='col-sm-6 my-2'>
                  <Card title="Top categories - Items sold">
                    <Table dataSource={topCategoriesData} columns={topCategoriesColumns} />
                  </Card>
                </div>
              )
            }
            {
              (topProducts) && (
                <div className='col-sm-6 my-2'>
                  <Card title="Top products - Items sold">
                    <Table dataSource={topProductData} columns={topProductColumns} />
                  </Card>
                </div>
              )
            }
          </div>
      </div>

      <Drawer title="Display Stats:" placement="right" width="300px" open={performanceOptions} onClose={PerformanceCancel}>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch defaultChecked onChange={setTotalSales}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Total sales</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch defaultChecked onChange={setNetSales}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Net sales</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch defaultChecked onChange={setOrders}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Orders</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch defaultChecked onChange={setProductsSold}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Products sold</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setReturns}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Returns</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setDiscountedOrders}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Discounted orders</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setNetDiscount}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Net discount amount</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setTotalTax}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Total tax</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setOrderTax}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Order tax</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setShippingTax}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Shipping tax</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setShipping}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Shipping</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setDownloads}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Downloads</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setGrossSales}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Gross sales</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch defaultChecked onChange={setVariationsSold}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Variations Sold</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setAverageOrderValue}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Average Order Value</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12'>
              <Title level={5}>SECTION TITLE</Title>
              <Input type="text" defaultValue="Performance" />
            </div>
        </div>
      </Drawer>

      <Drawer title="Charts" placement="right" width="300px" open={chartOptions} onClose={ChartCancel}>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setTotalSalesChart}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Total sales</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch defaultChecked onChange={setNetSalesChart}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Net sales</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch defaultChecked onChange={setOrdersChart}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Orders</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setAverageOrdersChart}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Average order value</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setItemsSoldChart}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Items sold</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setReturnsChart}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Returns</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setDiscountedOrdersChart}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Discounted orders</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setGrossDiscountedChart}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Gross discounted</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setTotalTaxChart}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Total tax</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setOrderTaxChart}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Order tax</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setShippingTaxChart}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Shipping tax</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setShippingChart}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Shipping</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setDownloadsChart}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Downloads</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12'>
              <Title level={5}>SECTION TITLE</Title>
              <Input type="text" defaultValue="Charts" />
            </div>
        </div>
      </Drawer>

      <Drawer title="Leaderboards" placement="right" width="300px" open={LeaderOptions} onClose={LeaderCancel}>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setTopCustomers}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Top Customers - Total Spend</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch onChange={setTopCoupons}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Top Coupons - Number of Orders</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch defaultChecked onChange={setTopCategories}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Top categories - Items sold</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
              <Switch defaultChecked onChange={setTopProducts}/>
            </div>
            <div className='col-sm-9'>
              <Paragraph>Top products - Items sold</Paragraph>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12'>
              <Title level={5}>SECTION TITLE</Title>
              <Input type="text" defaultValue="Leaderboards" />
            </div>
        </div>
      </Drawer>
    </div>
  );
}

export default WaDashboard;
