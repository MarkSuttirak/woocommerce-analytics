import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';
import { Typography, Select, Space, Card, Button, DatePicker, Dropdown, Modal, Switch, Input, Table, Drawer, Checkbox } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faEllipse, faEllipsisVertical, faChartSimple, faChartLine, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Line, Column } from '@ant-design/plots';
import { Link } from 'react-router-dom';

const RevenueTable = () => {

    const { Text, Paragraph } = Typography;

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
        <>
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
        </>
    )
}

export default RevenueTable;