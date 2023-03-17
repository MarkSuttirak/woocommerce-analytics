import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Typography, Select, Space, Card, Button, DatePicker, Dropdown, Modal, Switch, Input, Table, Drawer, Checkbox } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipse, faEllipsisVertical, faChartSimple, faChartLine, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Line, Column } from '@ant-design/plots';
import { Link } from 'react-router-dom';

const WaDownloads = () => {
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

    const [fileTable, setFileTable] = useState(true);
    const [ordersTable, setOrdersTable] = useState(true);
    const [usernameTable, setUsernameTable] = useState(true);
    const [ipTable, setIpTable] = useState(true);

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

      const showDownloadsOptions = [
        { value: 'all downloads', label: 'All downloads' },
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
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          sorter: true,
        },
        {
          title: 'Product title',
          dataIndex: 'productTitle',
          key: 'productTitle',
          sorter: true,
        },
        {
          title: 'File name',
          dataIndex: 'fileName',
          key: 'fileName',
          sorter: true,
          className: (!fileTable && 'hidden'),
        },
        {
            title: 'Order #',
            dataIndex: 'order',
            key: 'order',
            sorter: true,
            className: (!ordersTable && 'hidden'),
          },
          {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            sorter: true,
            className: (!usernameTable && 'hidden'),
          },
          {
            title: 'IP',
            dataIndex: 'ip',
            key: 'ip',
            sorter: true,
            className: (!ipTable && 'hidden'),
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
                <Select defaultValue="all downloads" placeholder="Compare to" style={{width: 300}} options={showDownloadsOptions} />
            </div>
            </header>

            <div className='mt-4 performance'>
                <div className='row'>
                    <div className='col-sm'>
                        <Card className='active'>
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
                </div>
            </div>

            <div className='mt-4 chart-table'>
                <Card title={
                  <Space>
                    <Title level={5} style={{margin:0}}>Items sold</Title>
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
                    <Title level={5} style={{margin:0}}>Downloads</Title>
                } extra={
                    <Button type="ghost" onClick={showRevenueTableOptions}>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </Button>
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
                        <Switch defaultChecked onChange={setFileTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>File name</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setOrdersTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Order #</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setUsernameTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Username</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setIpTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>IP</Paragraph>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default WaDownloads;