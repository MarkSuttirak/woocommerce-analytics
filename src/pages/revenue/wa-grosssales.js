import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Typography, Select, Space, Card, Button, DatePicker, Dropdown, Modal, Switch, Input, Table, Drawer, Checkbox } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipse, faEllipsisVertical, faChartSimple, faChartLine, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Line, Column } from '@ant-design/plots';
import { Link } from 'react-router-dom';

const WaGrossSales = () => {
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

    const { Title, Text, Paragraph } = Typography;
    const { RangePicker } = DatePicker;

    const [ordersTable, setOrdersTable] = useState(true);
    const [grossSalesTable, setGrossSalesTable] = useState(true);
    const [returnsTable, setReturnsTable] = useState(true);
    const [couponsTable, setCouponsTable] = useState(true);
    const [netSalesTable, setNetSalesTable] = useState(true);
    const [taxesTable, setTaxesTable] = useState(true);
    const [shippingTable, setShippingTable] = useState(true);
    const [totalSalesTable, setTotalSalesTable] = useState(true);

    const [revenueTableOptions, setRevenueTableOptions] = useState(false);
    const showRevenueTableOptions = () => {
      setRevenueTableOptions(true);
    };
    const revenueTableCancel = () => {
      setRevenueTableOptions(false);
    };

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

      const comparisonOptions = [
        { value: 'previous period', label: 'Previous period' },
        { value: 'previous year', label: 'Previous year' }
      ];

      const revenueData = [
        {
          key: '1',
          date: 'March 1, 2023',
          orders: 0,
          grossSales: '$0.00',
          returns: '$0.00',
          coupons: '$0.00',
          netSales: '$0.00',
          taxes: '$0.00',
          shipping: '$0.00',
          totalSales: '$0.00',
        },
        {
            key: '2',
            date: 'March 2, 2023',
            orders: 0,
            grossSales: '$0.00',
            returns: '$0.00',
            coupons: '$0.00',
            netSales: '$0.00',
            taxes: '$0.00',
            shipping: '$0.00',
            totalSales: '$0.00',
          },
          {
            key: '3',
            date: 'March 3, 2023',
            orders: 0,
            grossSales: '$0.00',
            returns: '$0.00',
            coupons: '$0.00',
            netSales: '$0.00',
            taxes: '$0.00',
            shipping: '$0.00',
            totalSales: '$0.00',
          },
      ];
      
      
    
      const revenueColumns = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          sorter: true,
        },
        {
          title: 'Orders',
          dataIndex: 'orders',
          key: 'orders',
          sorter: true,
          className: (!ordersTable && 'hidden'),
        },
        {
          title: 'Gross sales',
          dataIndex: 'grossSales',
          key: 'grossSales',
          sorter: true,
          className: (!grossSalesTable && 'hidden'),
        },
        {
            title: 'Returns',
            dataIndex: 'returns',
            key: 'returns',
            sorter: true,
            className: (!returnsTable && 'hidden'),
          },
          {
            title: 'Coupons',
            dataIndex: 'coupons',
            key: 'coupons',
            sorter: true,
            className: (!couponsTable && 'hidden'),
          },
          {
            title: 'Net sales',
            dataIndex: 'netSales',
            key: 'netSales',
            sorter: true,
            className: (!netSalesTable && 'hidden'),
          },
          {
            title: 'Taxes',
            dataIndex: 'taxes',
            key: 'taxes',
            sorter: true,
            className: (!taxesTable && 'hidden'),
          },
          {
            title: 'Shipping',
            dataIndex: 'shipping',
            key: 'shipping',
            sorter: true,
            className: (!shippingTable && 'hidden'),
          },
          {
            title: 'Total sales',
            dataIndex: 'totalSales',
            key: 'totalSales',
            sorter: true,
            className: (!totalSalesTable && 'hidden'),
          },   
      ];

    return (
        <div className="App">
            <header className="App-header">
            <div className='d-inline-block'>
                <Paragraph>Date range:</Paragraph>
                <Select defaultValue="today" placeholder="Select a date range" style={{width: 300}} options={dateOptions} />
            </div>
            <div className='d-inline-block ms-2'>
                <Paragraph>Compare to:</Paragraph>
                <Select defaultValue="previous year" placeholder="Compare to" style={{width: 300}} options={comparisonOptions} />
            </div>
            <div className='d-inline-block ms-2'>
                <Paragraph>Custom date range:</Paragraph>
                <RangePicker />
            </div>
            </header>

            <div className='mt-4 performance'>
                <div className='row'>
                    <div className='col-sm-3'>
                    <Card className='active'>
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
                    </div>
                    <div className='col-sm-3'>
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
                    </div>
                    <div className='col-sm-3'>
                        <Card>
                            <Paragraph>Coupons</Paragraph>
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
                    <div className='col-sm-3'>
                        <Link to="/revenue/net-sales">
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
                    <div class="w-100 d-none d-md-block my-2"></div>
                    <div className='col-sm-3'>
                        <Card>
                            <Paragraph>Taxes</Paragraph>
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
                    <div className='col-sm-3'>
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
                    </div>
                    <div className='col-sm-3'>
                        <Link to="/revenue/total-sales">
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
                </div>
            </div>

            <div className='mt-4 total-sales-table'>
                <Card title={
                  <Space>
                    <Title level={5} style={{margin:0}}>Gross sales</Title>
                    <Checkbox>Today</Checkbox>
                    <Checkbox>Previous year</Checkbox>
                  </Space>
                } extra={
                    <>
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
                        </Space>
                    </>
                }>
                    { (lineChart && <DemoLine /> ) }
                    { (barChart && <DemoColumn />)}
                </Card>
            </div>

            <div className='mt-4 revenue-table card-with-table'>
                <Card title="Revenue" extra={
                    <Space>
                        <Button type='ghost'>
                            <Space>
                            <FontAwesomeIcon icon={faCloudArrowDown} />
                            Download
                            </Space>
                        </Button>
                        <Button type="ghost" onClick={showRevenueTableOptions}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </Button>
                    </Space>
                }>
                    <Table columns={revenueColumns} dataSource={revenueData}/>
                    <div style={{display:"flex",gap:"16px",justifyContent:"center",marginBottom:"20px"}}>
                        <Text><strong>1</strong> day</Text>
                        <Text><strong>0</strong> orders</Text>
                        <Text><strong>$0.00</strong> Gross sales</Text>
                        <Text><strong>$0.00</strong> Returns</Text>
                        <Text><strong>$0.00</strong> Coupons</Text>
                        <Text><strong>$0.00</strong> Net sales</Text>
                        <Text><strong>$0.00</strong> Taxes</Text>
                        <Text><strong>$0.00</strong> Shipping</Text>
                        <Text><strong>$0.00</strong> Total sales</Text>
                    </div>
                </Card>
            </div>

            <Drawer title="Charts" placement="right" width="300px" open={revenueTableOptions} onClose={revenueTableCancel}>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setOrdersTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Orders</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setGrossSalesTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Gross sales</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setReturnsTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Returns</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setCouponsTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Coupons</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setNetSalesTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Net sales</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setTaxesTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Taxes</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setShippingTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Shipping</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setTotalSalesTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Total sales</Paragraph>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default WaGrossSales;