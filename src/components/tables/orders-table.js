import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';
import { Typography, Select, Space, Card, Button, DatePicker, Dropdown, Modal, Switch, Input, Table, Drawer, Checkbox } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faEllipse, faEllipsisVertical, faChartSimple, faChartLine, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

const OrdersTable = () => {

    const { Text, Paragraph } = Typography;

    const [statusTable, setStatusTable] = useState(true);
    const [customerTable, setCustomerTable] = useState(true);
    const [customerTypeTable, setCustomerTypeTable] = useState(true);
    const [productsTable, setProductsTable] = useState(true);
    const [itemsSoldTable, setItemsSoldTable] = useState(true);
    const [couponsTable, setCouponsTable] = useState(true);

    const [ordersTableOptions, setOrdersTableOptions] = useState(false);
    const showOrdersTableOptions = () => {
      setOrdersTableOptions(true);
    };
    const ordersTableCancel = () => {
      setOrdersTableOptions(false);
    };

    const ordersData = [
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
      ];
      
      
    
      const ordersColumns = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          sorter: true,
        },
        {
          title: 'Order #',
          dataIndex: 'order',
          key: 'order',
          sorter: true,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          sorter: true,
          className: (!statusTable && 'hidden'),
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customer',
            sorter: true,
            className: (!customerTable && 'hidden'),
          },
          {
            title: 'Customer type',
            dataIndex: 'customerType',
            key: 'customerType',
            sorter: true,
            className: (!customerTypeTable && 'hidden'),
          },
          {
            title: 'Product(s)',
            dataIndex: 'products',
            key: 'products',
            sorter: true,
            className: (!productsTable && 'hidden'),
          },
          {
            title: 'Items sold',
            dataIndex: 'itemsSold',
            key: 'itemsSold',
            sorter: true,
            className: (!itemsSoldTable && 'hidden'),
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
          }, 
      ];

    return (
        <>
            <div className='mt-4 order-table card-with-table'>
                <Card title="Orders" extra={
                    <Space>
                        <Button type='ghost'>
                            <Space>
                            <FontAwesomeIcon icon={faCloudArrowDown} />
                            Download
                            </Space>
                        </Button>
                        <Button type="ghost" onClick={showOrdersTableOptions}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </Button>
                    </Space>
                }>
                    <Table columns={ordersColumns} dataSource={ordersData}/>
                    <div style={{display:"flex",gap:"16px",justifyContent:"center",marginBottom:"20px"}}>
                        <Text><strong>0</strong> Orders</Text>
                        <Text><strong>0</strong> Customers</Text>
                        <Text><strong>0</strong> Products</Text>
                        <Text><strong>0</strong> Items sold</Text>
                        <Text><strong>0</strong> Coupons</Text>
                        <Text><strong>$0.00</strong> net sales</Text>
                    </div>
                </Card>
            </div>

            <Drawer title="Charts" placement="right" width="300px" open={ordersTableOptions} onClose={ordersTableCancel}>
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
                        <Switch defaultChecked onChange={setCustomerTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Customer</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setCustomerTypeTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Customer type</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setProductsTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Product(s)</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setItemsSoldTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Items sold</Paragraph>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Switch defaultChecked onChange={setCouponsTable}/>
                    </div>
                    <div className='col-sm-9'>
                        <Paragraph>Coupon(s)</Paragraph>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default OrdersTable;