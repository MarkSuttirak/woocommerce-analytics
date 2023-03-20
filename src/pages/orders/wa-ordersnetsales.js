import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Typography, Select, Space, Card, Button, DatePicker, Dropdown, Modal, Switch, Input, Table, Drawer, Checkbox } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipse, faEllipsisVertical, faChartSimple, faChartLine, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Line, Column } from '@ant-design/plots';
import { Link } from 'react-router-dom';
import OrdersGraph from '../../components/graphs/orders-graph';
import OrdersTable from '../../components/tables/orders-table';

const WaOrderNetSales = () => {

    const { Title, Text, Paragraph } = Typography;
    const { RangePicker } = DatePicker;

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

      const showOrdersOptions = [
        { value: 'all orders', label: 'All orders' },
        { value: 'advanced filters', label: 'Advanced filters' }
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
            <div className='d-inline-block ms-2'>
                <Paragraph>Show:</Paragraph>
                <Select defaultValue="all orders" placeholder="Compare to" style={{width: 300}} options={showOrdersOptions} />
            </div>
            </header>

            <div className='mt-4 performance'>
                <div className='row'>
                    <div className='col-sm-3'>
                    <Link to="/orders">
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
                    </Link>
                    </div>
                    <div className='col-sm-3'>
                        <Card className='active'>
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
                    <div className='col-sm-3'>
                        <Link to="/orders/average-order-value">
                            <Card>
                                <Paragraph>Average order value</Paragraph>
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
                    <div className='col-sm-3'>
                        <Link to="/orders/average-items-per-order">
                            <Card>
                                <Paragraph>Average items per order</Paragraph>
                                <Title level={3} className="row">
                                    <div className='col-sm-6'>
                                    0
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

            <OrdersGraph title="Net sales" link="https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json" />

            <OrdersTable />
            
        </div>
    )
}

export default WaOrderNetSales;