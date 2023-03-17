import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Typography, Select, Space, Card, Button, DatePicker, Dropdown, Modal, Switch, Input, Table, Drawer, Checkbox } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipse, faEllipsisVertical, faChartSimple, faChartLine, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Line, Column } from '@ant-design/plots';
import { Link } from 'react-router-dom';

const WaItemsSold = () => {
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

    const [amountDiscountedTable, setAmountDiscountedTable] = useState(true);
    const [createdTable, setCreatedTable] = useState(true);
    const [expiresTable, setExpiresTable] = useState(true);
    const [typeTable, setTypeTable] = useState(true);

    const [productTableOptions, setProductTableOptions] = useState(false);
    const showProductTableOptions = () => {
      setProductTableOptions(true);
    };
    const productTableCancel = () => {
      setProductTableOptions(false);
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

      const showCouponsOptions = [
        { value: 'all coupons', label: 'All coupons' },
        { value: 'single coupon', label: 'Single coupon' },
        { value: 'comparison', label: 'Comparison' }
      ];

      const [selectedRowKeys, setSelectedRowKeys] = useState([]);

      const productData = [
        {
          key: '1',
          productTitle: 'teststserf',
          sku: 'testst',
          itemsSold: 2,
          netSales: "$0.00",
          orders:1,
          category:"Uncategorized",
          variations: 2,
          status:"In stock",
          stock: 2,
        },
      ];
      
      
    
      const productColumns = [
        {
          title: 'Coupon code',
          dataIndex: 'couponCode',
          key: 'couponCode',
          sorter: true,
        },
        {
          title: 'Orders',
          dataIndex: 'orders',
          key: 'orders',
          sorter: true,
        },
        {
          title: 'Amount discounted',
          dataIndex: 'amountDiscounted',
          key: 'itemsSold',
          sorter: true,
          className: (!amountDiscountedTable && 'hidden'),
        },
        {
            title: 'Created',
            dataIndex: 'created',
            key: 'created',
            sorter: true,
            className: (!createdTable && 'hidden'),
          },
          {
            title: 'Expires',
            dataIndex: 'expires',
            key: 'expires',
            sorter: true,
            className: (!expiresTable && 'hidden'),
          },
          {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            sorter: true,
            className: (!typeTable && 'hidden'),
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
                <Select defaultValue="all products" placeholder="Compare to" style={{width: 300}} options={showCouponsOptions} />
            </div>
            </header>

            <div className='mt-4 performance'>
                <div className='row'>
                    <div className='col-sm'>
                    <Card className='active'>
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
                    <div className='col-sm'>
                        <Card>
                            <Paragraph>Amount</Paragraph>
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
                </div>
            </div>

            <div className='mt-4 chart-table'>
                <Card title={
                  <Space>
                    <Title level={5} style={{margin:0}}>Discounted orders</Title>
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
                <Card title={
                    <Space>
                        <Title level={5} style={{margin:0}}>Coupons</Title>
                        <Paragraph style={{margin:0}}>Compare</Paragraph>
                        <Input type="text" style={{width:"calc(100% + 40vw)"}} />
                    </Space>
                } extra={
                    <Button type="ghost" onClick={showProductTableOptions}>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </Button>
                }>
                    <Table rowSelection={rowSelection} columns={productColumns} dataSource={productData} />
                    <div style={{display:"flex",gap:"16px",justifyContent:"center",marginBottom:"20px"}}>
                        <Text><strong>0</strong> Coupons</Text>
                        <Text><strong>0</strong> Orders</Text>
                        <Text><strong>$0.00</strong> Amount discounted</Text>
                    </div>
                </Card>
            </div>

            <Drawer title="Charts" placement="right" width="300px" open={productTableOptions} onClose={productTableCancel}>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setAmountDiscountedTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Amount discounted</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setCreatedTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Created</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setExpiresTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Expires</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setTypeTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Type</Paragraph>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default WaItemsSold;