import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Typography, Select, Space, Card, Button, DatePicker, Dropdown, Modal, Switch, Input, Table, Drawer, Checkbox } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipse, faEllipsisVertical, faChartSimple, faChartLine, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Line, Column } from '@ant-design/plots';
import { Link } from 'react-router-dom';

const WaVariationsSold = () => {
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

    const [skuTable, setSkuTable] = useState(true);
    const [ordersTable, setOrdersTable] = useState(true);
    const [statusTable, setStatusTable] = useState(true);
    const [stockTable, setStockTable] = useState(true);

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

      const showVariationsOptions = [
        { value: 'all variations', label: 'All variations' },
        { value: 'single variation', label: 'Single variation' },
        { value: 'comparison', label: 'Comparison' },
        { value: 'advanced filters', label: 'Advanced filters' }
      ];

      const [selectedRowKeys, setSelectedRowKeys] = useState([]);

      const revenueData = [
        {
          key: '1',
          productOrVariationTitle: 'testsets',
          sku: 'TES1000',
          itemsSold: 1,
          netSales: '$0.00',
          orders: 0,
          status: 'In stock',
          stock: 800
        },
        {
            key: '2',
            productOrVariationTitle: 'testggdgffddgfsets',
            sku: 'TES1001',
            itemsSold: 3,
            netSales: '$0.00',
            orders: 0,
            status: 'In stock',
            stock: 400
          },
      ];
      
      
    
      const revenueColumns = [
        {
          title: 'Product / Variation title',
          dataIndex: 'productOrVariationTitle',
          key: 'productOrVariationTitle',
          sorter: true,
        },
        {
          title: 'SKU',
          dataIndex: 'sku',
          key: 'sku',
          sorter: true,
          className: (!skuTable && 'hidden'),
        },
        {
          title: 'Items sold',
          dataIndex: 'itemsSold',
          key: 'itemsSold',
          sorter: true,
        },
        {
            title: 'Net sales',
            dataIndex: 'netSales',
            key: 'netSales',
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
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            sorter: true,
            className: (!statusTable && 'hidden'),
          },
          {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
            sorter: true,
            className: (!stockTable && 'hidden'),
          }, 
      ];

      const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
      };
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };

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
            <div className='d-inline-block ms-2'>
                <Paragraph>Show:</Paragraph>
                <Select defaultValue="all variations" placeholder="Compare to" style={{width: 300}} options={showVariationsOptions} />
            </div>
            </header>

            <div className='mt-4 performance'>
                <div className='row'>
                    <div className='col-sm'>
                    <Card className='active'>
                        <Paragraph>Items sold</Paragraph>
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
                    <div className='col-sm'>
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
                    </div>
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
                </div>
            </div>

            <div className='mt-4 total-sales-table'>
                <Card title={
                  <Space>
                    <Title level={5} style={{margin:0}}>Items sold</Title>
                    <Checkbox>Today</Checkbox>
                    <Checkbox>Previous year</Checkbox>
                  </Space>
                } extra={
                    <>
                        <Select 
                            defaultValue="byhour"
                            options={[
                                {value: 'byhour', label: 'By hour'},
                                {value: 'byday', label: 'By day'},
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
                <Card title={
                    <Title level={5} style={{margin:0}}>Variations</Title>
                } extra={
                    <Space>
                        <Button>
                            Compare
                        </Button>
                        <Button type="ghost" onClick={showRevenueTableOptions}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </Button>
                    </Space>
                }>
                    <Table rowSelection={rowSelection} columns={revenueColumns} dataSource={revenueData}/>
                    <div style={{display:"flex",gap:"16px",justifyContent:"center",marginBottom:"20px"}}>
                        <Text><strong>0</strong> vairations sold</Text>
                        <Text><strong>0</strong> items sold</Text>
                        <Text><strong>$0.00</strong> Net sales</Text>
                        <Text><strong>0</strong> Orders</Text>
                    </div>
                </Card>
            </div>

            <Drawer title="Charts" placement="right" width="300px" open={revenueTableOptions} onClose={revenueTableCancel}>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setSkuTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>SKU</Paragraph>
                    </div>
                </div>
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
                        <Switch defaultChecked onChange={setStatusTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Status</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setStockTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Stock</Paragraph>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default WaVariationsSold;